# AI Finance Course Landing Page

Static mobile-first landing page for the AI Finance Course.

## How to run

Open `index.html` directly in browser, or use VS Code Live Server.

## Form submissions

The preorder form sends leads to Google Apps Script webhook stored in:

`js/config.js`

Current webhook:

`https://script.google.com/macros/s/AKfycbz3oc3FLyep-TBPGRsBec6qjMtPGdK6mGFp7b4ka7LgF2jNFEjA6h4-ObYBJ6ebVcIMXA/exec`

Google Sheets columns expected:

`Date | Name | Contact | Type | Source | Message`

## Assets

Placeholder images are included in `assets/images/`:

- `speaker-alexander.webp` — 600x800
- `speaker-yulia.webp` — 600x800
- `review-valeria.webp` — 120x120
- `review-alexey.webp` — 120x120

Replace them with real WebP images using the same filenames.

## Notes

Before the course launch, all CTA buttons lead to preorder form.
