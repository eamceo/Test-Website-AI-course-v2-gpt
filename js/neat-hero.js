(async () => {
  const canvas = document.querySelector("[data-hero-gradient]");
  if (!canvas) {
    console.warn("Hero canvas not found");
    return;
  }

  const mobile = window.matchMedia("(max-width: 767px)").matches;
  const config = {
    colors: [
      { color: "#FF3087", enabled: true },
      { color: "#1B36A6", enabled: true },
      { color: "#00D3FF", enabled: true },
      { color: "#6D3BFF", enabled: true },
      { color: "#492E52", enabled: true }
    ],
    speed: mobile ? 1.8 : 3.5,
    horizontalPressure: 3,
    verticalPressure: mobile ? 3.5 : 5,
    waveFrequencyX: mobile ? 4 : 8,
    waveFrequencyY: 1,
    waveAmplitude: mobile ? 3.5 : 5,
    shadows: 3,
    highlights: 2,
    colorBrightness: 1,
    colorSaturation: mobile ? 4 : 7,
    wireframe: false,
    colorBlending: 7,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1,
    grainScale: 2,
    grainSparsity: 0,
    grainIntensity: mobile ? 0.28 : 0.5,
    grainSpeed: 1,
    resolution: mobile ? 0.7 : 1.2,
    yOffset: 0,
    yOffsetWaveMultiplier: 3,
    yOffsetColorMultiplier: 3.3,
    yOffsetFlowMultiplier: 3.8,
    flowDistortionA: 5,
    flowDistortionB: 7.7,
    flowScale: mobile ? 1.7 : 2.6,
    flowEase: 0.36,
    flowEnabled: true,
    enableProceduralTexture: false,
    textureVoidLikelihood: 0.22,
    textureVoidWidthMin: 120,
    textureVoidWidthMax: 150,
    textureBandDensity: 1.9,
    textureColorBlending: 0.12,
    textureSeed: 333,
    textureEase: 0.58,
    proceduralBackgroundColor: "#D0DBFB",
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
    domainWarpEnabled: false,
    domainWarpIntensity: 0,
    domainWarpScale: 3,
    vignetteIntensity: 0,
    vignetteRadius: 0.8,
    fresnelEnabled: false,
    fresnelPower: 2,
    fresnelIntensity: 0.5,
    fresnelColor: "#FFFFFF",
    iridescenceEnabled: false,
    iridescenceIntensity: 0.5,
    iridescenceSpeed: 1,
    bloomIntensity: 0,
    bloomThreshold: 0.7,
    chromaticAberration: 0
  };

  try {
    const { NeatGradient } = await import("https://cdn.jsdelivr.net/npm/@firecms/neat@0.8.0/+esm");
    const gradient = new NeatGradient({
      ref: canvas,
      ...config
    });

    window.addEventListener("scroll", () => {
      gradient.yOffset = window.scrollY;
    }, { passive: true });

    canvas.dataset.neatLoaded = "true";
  } catch (error) {
    console.error("NeatGradient error:", error);
    canvas.dataset.neatLoaded = "false";
  }
})();
