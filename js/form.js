async function submitLeadForm(form) {
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');
  const data = {
    name: formData.get('name') || '',
    contact: formData.get('contact') || '',
    type: formData.get('type') || 'preorder',
    source: formData.get('source') || 'website',
    message: formData.get('message') || ''
  };

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Отправляем...';
  }

  try {
    await fetch(window.APP_CONFIG.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    form.innerHTML = `
      <div class="form-success">
        <h3>Спасибо! Заявка отправлена.</h3>
        <p>Мы свяжемся с вами перед запуском курса. Если ответа не будет, напишите нам напрямую в Telegram или WhatsApp.</p>
      </div>
    `;
  } catch (error) {
    console.error('Form submit error:', error);
    form.innerHTML = `
      <div class="form-error">
        <h3>Не удалось отправить заявку</h3>
        <p>Пожалуйста, напишите нам напрямую в Telegram или WhatsApp.</p>
      </div>
    `;
  }
}

document.querySelectorAll('[data-lead-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitLeadForm(form);
  });
});
