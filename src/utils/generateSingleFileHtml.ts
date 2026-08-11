export function generateSingleFileHtml(checkoutUrl: string = 'https://pay.kiwify.com.br/QNyzh80'): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto Vice City - Seu Canal de GTA VI Pronto Hoje</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
  <style>
    /* RESET & VARS */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :root {
      --bg-dark: #f8fafc;
      --card-bg: #ffffff;
      --card-border: #e2e8f0;
      --pink-neon: #db2777;
      --purple-neon: #7c3aed;
      --orange-neon: #ea580c;
      --text-white: #0f172a;
      --text-muted: #475569;
    }
    body {
      background-color: var(--bg-dark);
      color: var(--text-white);
      font-family: 'Montserrat', sans-serif;
      line-height: 1.5;
      overflow-x: hidden;
      padding-top: 48px;
      -webkit-font-smoothing: antialiased;
    }

    /* TYPOGRAPHY */
    h1, h2, h3, .bebas-font {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* UTILS & CONTAINERS */
    .container {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      padding: 0 16px;
    }
    .text-center { text-align: center; }
    .gradient-text {
      background: linear-gradient(135deg, #ff2a85 0%, #f97316 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* TOP FIXED TIMER BAR */
    .top-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 48px;
      background: linear-gradient(90deg, #581c87, #be185d, #581c87);
      border-bottom: 1px solid #f472b6;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.3px;
    }
    .top-bar span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    /* HERO SECTION */
    .hero {
      position: relative;
      padding: 40px 0 32px 0;
      background: radial-gradient(circle at 50% 20%, rgba(251, 207, 232, 0.4) 0%, rgba(233, 213, 255, 0.2) 40%, transparent 80%);
    }
    .hero-tag {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      background: #fce7f3;
      border: 1px solid #fbcfe8;
      color: #be185d;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .hero h1 {
      font-size: 38px;
      line-height: 1.05;
      margin-bottom: 16px;
      color: #0f172a;
    }
    .hero p {
      font-size: 15px;
      color: var(--text-muted);
      margin-bottom: 28px;
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
    }

    /* BUTTONS */
    .btn-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 480px;
      padding: 18px 24px;
      background: linear-gradient(135deg, #ff2a85 0%, #f97316 100%);
      color: #ffffff;
      font-size: 18px;
      font-weight: 800;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 12px;
      box-shadow: 0 0 25px rgba(255, 42, 133, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      border: none;
      cursor: pointer;
    }
    .btn-cta:active {
      transform: scale(0.98);
    }
    .microcopy {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 10px;
    }

    /* QUICK PROOF */
    .section-proof {
      padding: 24px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      background: rgba(18, 12, 34, 0.6);
    }
    .proof-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 20px;
    }
    .proof-title {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #f1f5f9;
    }
    .proof-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .proof-stat {
      background: rgba(255, 255, 255, 0.03);
      padding: 12px 8px;
      border-radius: 8px;
      border: 1px solid rgba(255, 42, 133, 0.15);
    }
    .proof-stat-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 26px;
      color: var(--pink-neon);
      line-height: 1;
    }
    .proof-stat-desc {
      font-size: 11px;
      color: var(--text-muted);
      margin-top: 4px;
    }

    /* OPPORTUNITY & RESEARCH SECTION */
    .section-opportunity {
      padding: 24px 0;
    }
    .opp-tag {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      color: var(--pink-neon);
      background: rgba(255, 42, 133, 0.1);
      border: 1px solid rgba(255, 42, 133, 0.3);
      padding: 3px 12px;
      border-radius: 20px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .opp-card {
      background: #120a24;
      border: 1px solid rgba(255, 42, 133, 0.2);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      text-align: left;
    }
    .opp-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      color: #f472b6;
      background: rgba(131, 24, 67, 0.5);
      border: 1px solid rgba(255, 42, 133, 0.3);
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 6px;
      text-transform: uppercase;
    }
    .opp-card h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
      text-transform: none;
    }
    .opp-card p {
      font-size: 12px;
      color: #cbd5e1;
      line-height: 1.5;
    }

    /* MODULES (O QUE VOCÊ RECEBE) */
    .section-modules {
      padding: 40px 0;
    }
    .section-header {
      margin-bottom: 28px;
    }
    .section-header h2 {
      font-size: 32px;
      margin-bottom: 6px;
    }
    .section-header p {
      font-size: 14px;
      color: var(--text-muted);
    }
    .modules-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .module-card {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 16px;
      border-radius: 12px;
      text-align: left;
    }
    .check-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      background: rgba(255, 42, 133, 0.15);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pink-neon);
      margin-top: 2px;
    }
    .module-info h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
      letter-spacing: 0;
      text-transform: none;
    }
    .module-info p {
      font-size: 13px;
      color: var(--text-muted);
    }

    /* BONUS SECTION */
    .section-bonuses {
      padding: 28px 0;
      margin: 10px 0;
    }
    .bonus-box {
      background: linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(255, 42, 133, 0.05) 100%);
      border: 1px dashed rgba(139, 92, 246, 0.4);
      border-radius: 16px;
      padding: 24px 16px;
    }
    .bonus-card {
      background: rgba(7, 5, 14, 0.7);
      border: 1px solid rgba(139, 92, 246, 0.25);
      border-radius: 10px;
      padding: 16px;
      margin-top: 14px;
      text-align: left;
    }
    .bonus-tag {
      display: inline-block;
      font-size: 10px;
      font-weight: 800;
      background: var(--purple-neon);
      color: #fff;
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    .bonus-card h4 {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .bonus-card p {
      font-size: 13px;
      color: var(--text-muted);
    }

    /* TESTIMONIALS (DEPOIMENTOS) */
    .section-testimonials {
      padding: 32px 0;
    }
    .swipe-indicator {
      display: inline-block;
      font-size: 11px;
      font-weight: 600;
      color: var(--pink-neon);
      background: rgba(255, 42, 133, 0.1);
      border: 1px solid rgba(255, 42, 133, 0.2);
      padding: 2px 10px;
      border-radius: 20px;
      margin-top: 6px;
    }
    .testimonials-grid {
      display: flex;
      flex-direction: row;
      gap: 12px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 12px;
      padding-top: 4px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .testimonials-grid::-webkit-scrollbar {
      display: none;
    }
    .testimonial-card {
      min-width: 270px;
      width: 280px;
      flex-shrink: 0;
      scroll-snap-align: start;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 16px;
      text-align: left;
    }
    .testimonial-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }
    .avatar-circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #23193a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      border: 1px solid rgba(255, 42, 133, 0.3);
    }
    .testimonial-info h4 {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
    }
    .stars {
      color: #fbbf24;
      font-size: 12px;
    }
    .testimonial-content {
      font-size: 13px;
      color: #cbd5e1;
      font-style: italic;
    }

    /* PRICING SECTION */
    .section-pricing {
      padding: 40px 0;
    }
    .price-box {
      background: radial-gradient(circle at 50% 0%, rgba(255, 42, 133, 0.2) 0%, rgba(18, 12, 34, 1) 70%);
      border: 2px solid rgba(255, 42, 133, 0.5);
      border-radius: 20px;
      padding: 32px 20px;
      box-shadow: 0 0 35px rgba(255, 42, 133, 0.2);
    }
    .old-price {
      font-size: 18px;
      color: var(--text-muted);
      text-decoration: line-through;
      margin-bottom: 4px;
    }
    .final-price {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 62px;
      color: #ffffff;
      line-height: 1;
      text-shadow: 0 0 15px rgba(255, 42, 133, 0.5);
    }
    .final-price span {
      font-size: 24px;
      color: var(--pink-neon);
    }
    .price-badge {
      display: inline-block;
      margin: 12px 0 20px 0;
      padding: 4px 12px;
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.4);
      color: #4ade80;
      font-size: 12px;
      font-weight: 700;
      border-radius: 20px;
    }

    /* FAQ ACCORDION (OBJEÇÕES) */
    .section-faq {
      padding: 40px 0;
    }
    .accordion-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: left;
    }
    .accordion-item {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      overflow: hidden;
    }
    .accordion-btn {
      width: 100%;
      padding: 16px;
      background: transparent;
      border: none;
      color: #ffffff;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      text-align: left;
    }
    .accordion-icon {
      font-size: 18px;
      transition: transform 0.2s;
      color: var(--pink-neon);
    }
    .accordion-content {
      display: none;
      padding: 0 16px 16px 16px;
      font-size: 13px;
      color: var(--text-muted);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 12px;
    }
    .accordion-item.active .accordion-content {
      display: block;
    }
    .accordion-item.active .accordion-icon {
      transform: rotate(45deg);
    }

    /* GUARANTEE SECTION */
    .section-guarantee {
      padding: 32px 0;
      margin: 20px 0;
    }
    .guarantee-box {
      background: rgba(18, 12, 34, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .guarantee-badge-icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff2a85, #f97316);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .guarantee-box h3 {
      font-size: 22px;
      color: #ffffff;
    }
    .guarantee-box p {
      font-size: 13px;
      color: var(--text-muted);
      max-width: 500px;
    }

    /* FINAL CTA */
    .section-final-cta {
      padding: 48px 0 60px 0;
      background: radial-gradient(circle at 50% 100%, rgba(255, 42, 133, 0.25) 0%, transparent 70%);
    }
    .section-final-cta h2 {
      font-size: 34px;
      margin-bottom: 12px;
    }
    .section-final-cta p {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    /* FOOTER */
    footer {
      padding: 24px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 12px;
      color: #64748b;
    }

    /* RESPONSIVE DESKTOP ADJUSTMENTS */
    @media (min-width: 640px) {
      .hero h1 { font-size: 52px; }
      .hero p { font-size: 17px; }
      .section-header h2 { font-size: 40px; }
      .modules-list { display: grid; grid-template-columns: 1fr 1fr; }
      .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
    }
  </style>
</head>
<body>

  <!-- BARRA FIXA NO TOPO -->
  <div class="top-bar">
    <span id="countdown-banner">⏳ Faltam <strong id="days-count">--</strong> dias pro lançamento de GTA VI (19/11)</span>
  </div>

  <!-- HERO SECTION -->
  <section class="hero text-center">
    <div class="container">
      
      <!-- BRAND LOGO & TITLE -->
      <div style="padding-bottom: 16px; text-align: center; display: flex; justify-content: center; align-items: center; gap: 12px;">
        <div style="width: 40px; height: 40px; position: relative; flex-shrink: 0;">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; border-radius: 10px; background: #0d0618; border: 1px solid rgba(255, 42, 133, 0.6); padding: 2px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
            <defs>
              <linearGradient id="pvcSunsetHtml" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ff2a85" />
                <stop offset="55%" stop-color="#ff7b00" />
                <stop offset="100%" stop-color="#6b21a8" />
              </linearGradient>
              <linearGradient id="pvcNeonHtml" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00f0ff" />
                <stop offset="100%" stop-color="#ff2a85" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="18" r="14" fill="url(#pvcSunsetHtml)" />
            <line x1="6" y1="21" x2="34" y2="21" stroke="#0d0618" stroke-width="1.2" />
            <line x1="8" y1="24" x2="32" y2="24" stroke="#0d0618" stroke-width="1.5" />
            <line x1="10" y1="27" x2="30" y2="27" stroke="#0d0618" stroke-width="1.8" />
            <path d="M14 34 Q16 26 18 20" stroke="#0d0618" stroke-width="2.4" stroke-linecap="round" />
            <path d="M18 20 Q13 18 10 20 M18 20 Q15 15 12 15 M18 20 Q20 14 22 16 M18 20 Q22 18 24 21" stroke="#0d0618" stroke-width="1.8" stroke-linecap="round" />
            <path d="M26 34 Q24 27 23 22" stroke="#0d0618" stroke-width="2.2" stroke-linecap="round" />
            <path d="M23 22 Q19 20 17 22 M23 22 Q21 18 19 18 M23 22 Q25 17 27 19 M23 22 Q27 20 29 23" stroke="#0d0618" stroke-width="1.6" stroke-linecap="round" />
            <rect x="2" y="2" width="36" height="36" rx="8" stroke="url(#pvcNeonHtml)" stroke-width="1.5" fill="none" opacity="0.7" />
          </svg>
        </div>
        <span class="bebas-font" style="font-size: 28px; letter-spacing: 1.5px; color: #ffffff; text-shadow: 0 0 15px rgba(255, 42, 133, 0.4);">
          PROJETO <span style="background: linear-gradient(90deg, #ff2a85, #fbbf24, #ff2a85); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">VICE CITY</span>
        </span>
      </div>

      <!-- TOP BADGE -->
      <div style="display: inline-block; margin-bottom: 12px; padding: 6px 14px; border-radius: 9999px; border: 1px solid rgba(192, 132, 252, 0.3); background: rgba(18, 7, 39, 0.8);">
        <span style="font-size: 11px; font-weight: bold; color: #e2e8f0; text-transform: uppercase; letter-spacing: 1px;">
          O MUNDO ESPEROU MAIS DE 10 ANOS POR ESSE MOMENTO
        </span>
      </div>

      <h1 style="font-family: 'Bebas Neue', sans-serif; font-size: 34px; line-height: 1.08; text-transform: uppercase; color: #fff; margin-bottom: 12px;">
        MONTE SEU CANAL DE <span style="background: linear-gradient(90deg, #ff2a85, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">GTA VI</span> – 100% <span style="color: #ff2a85; font-weight: 800;">PRONTO</span> PRA POSTAR – E <span style="color: #34d399; font-weight: 800;">LUCRE</span> COM A <span style="background: linear-gradient(90deg, #ff2a85, #c084fc, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MAIOR ONDA DE ATENÇÃO DA HISTÓRIA</span>
      </h1>

      <p style="font-family: 'Bebas Neue', sans-serif; font-size: 20px; letter-spacing: 0.5px; color: #cbd5e1; text-transform: uppercase; line-height: 1.2; margin-bottom: 20px;">
        SEM APARECER, SEM SABER EDITAR E SEM PRECISAR TER O JOGO
      </p>

      <p style="font-size: 13px; color: #cbd5e1; text-align: left; background: rgba(10, 4, 20, 0.9); padding: 14px; border-radius: 12px; border: 1px solid rgba(192, 132, 252, 0.2); line-height: 1.5; margin-bottom: 20px;">
        Faltam poucos meses. <strong style="color: #fff;">Quem entender o que está acontecendo agora</strong> pode entrar pra próxima geração de criadores lucrativos da internet. <span style="text-decoration: underline; text-decoration-color: #ff2a85;">Quem só assistir, vai ver os outros faturarem.</span>
      </p>
      
      <a href="${checkoutUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta">QUERO GARANTIR MEU ACESSO AGORA</a>
      <p class="microcopy">⚡ Acesso imediato em uma área de membros • Compra 100% segura</p>
    </div>
  </section>

  <!-- PROVA RÁPIDA -->
  <section class="section-proof text-center">
    <div class="container">
      <div class="proof-card">
        <div class="proof-title">Criado por quem já bateu meio milhão de visualizações em 1 semana em conta nova</div>
        <div class="proof-grid">
          <div class="proof-stat">
            <div class="proof-stat-num">+500k</div>
            <div class="proof-stat-desc">Views em 1 semana em conta nova</div>
          </div>
          <div class="proof-stat">
            <div class="proof-stat-num">100%</div>
            <div class="proof-stat-desc">Feito pelo celular</div>
          </div>
          <div class="proof-stat">
            <div class="proof-stat-num">ZERO</div>
            <div class="proof-stat-desc">Necessidade de aparecer</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PESQUISAS & OPORTUNIDADE DO MERCADO -->
  <section class="section-opportunity text-center">
    <div class="container">
      <h2 style="font-size: 28px; font-family: 'Bebas Neue', sans-serif; letter-spacing: 1px; color: #fff; margin-bottom: 20px; line-height: 1.1; text-transform: uppercase;">
        ISSO NÃO É “HYPE”. É A MAIOR OPORTUNIDADE DE CONTEÚDO DA DÉCADA – <span style="background: linear-gradient(to right, #60a5fa, #c084fc, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">COM DATA MARCADA.</span>
      </h2>

      <!-- 4 STATS GRID -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
        <div style="background: #100720; border: 1px solid rgba(192,132,252,0.25); border-radius: 16px; padding: 16px; text-align: center;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 38px; color: #ff2a85; line-height: 1;">475M</div>
          <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px;">views em 24h no trailer 2</div>
        </div>
        <div style="background: #100720; border: 1px solid rgba(192,132,252,0.25); border-radius: 16px; padding: 16px; text-align: center;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 38px; color: #ff2a85; line-height: 1;">+10</div>
          <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px;">anos de GTA no topo do YouTube</div>
        </div>
        <div style="background: #100720; border: 1px solid rgba(192,132,252,0.25); border-radius: 16px; padding: 16px; text-align: center;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 38px; color: #38bdf8; line-height: 1;">US$10bi</div>
          <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px;">só o GTA 5 já faturou</div>
        </div>
        <div style="background: #100720; border: 1px solid rgba(192,132,252,0.25); border-radius: 16px; padding: 16px; text-align: center;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 38px; color: #ff2a85; line-height: 1;">19/11</div>
          <div style="font-size: 12px; color: #cbd5e1; margin-top: 4px;">data de lançamento de GTA VI</div>
        </div>
      </div>

      <!-- INSIGHTS BLOCK -->
      <div style="background: #0b0518; border: 1px solid rgba(255,42,133,0.2); border-radius: 16px; padding: 16px; text-align: left; margin-bottom: 20px;">
        <div style="margin-bottom: 12px; font-size: 13px; color: #e2e8f0; line-height: 1.5; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px;">
          ➔ Um criador que esteve com a Rockstar foi direto: <strong style="color: #fff; background: rgba(255,42,133,0.2); padding: 2px 6px; border-radius: 4px;">“esse jogo vai produzir milionários.”</strong>
        </div>
        <div style="margin-bottom: 12px; font-size: 13px; color: #e2e8f0; line-height: 1.5; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px;">
          ➔ A Rockstar <strong>comprou os times do FiveM/RedM</strong> e abriu um <strong>marketplace oficial</strong> — estão construindo as ferramentas pra criador faturar.
        </div>
        <div style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
          ➔ Conteúdo de GTA é uma das categorias mais lucrativas do YouTube há mais de 10 anos.
        </div>
      </div>

      <p style="font-size: 13px; color: #cbd5e1; text-align: left; background: rgba(10,4,20,0.9); padding: 16px; border-radius: 12px; border: 1px solid rgba(192,132,252,0.2); line-height: 1.5;">
        Em poucos meses, <strong>centenas de milhões de pessoas</strong> vão estar procurando, assistindo e comentando GTA VI ao mesmo tempo. Atenção desse tamanho é dinheiro na mesa. A única pergunta é quem vai estar posicionado pra pegar.
      </p>
    </div>
  </section>

  <!-- COMO FUNCIONA (EM 3 PASSOS) -->
  <section class="section-opportunity text-center" style="padding-top: 0;">
    <div class="container">
      <h2 style="font-size: 28px; font-family: 'Bebas Neue', sans-serif; letter-spacing: 1px; color: #fff; margin-bottom: 16px; text-transform: uppercase;">
        EM <span style="color: #ff2a85;">3 PASSOS:</span>
      </h2>

      <div style="display: flex; flex-direction: column; gap: 10px; text-align: left;">
        <div style="background: #0f071f; border: 1px solid rgba(192,132,252,0.2); padding: 16px; border-radius: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 36px; color: #38bdf8; font-weight: bold; width: 30px; text-align: center;">1</div>
          <div style="font-size: 13px; color: #f1f5f9;"><strong>Baixa a pasta.</strong> Tudo organizado, acesso imediato.</div>
        </div>
        <div style="background: #0f071f; border: 1px solid rgba(192,132,252,0.2); padding: 16px; border-radius: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 36px; color: #c084fc; font-weight: bold; width: 30px; text-align: center;">2</div>
          <div style="font-size: 13px; color: #f1f5f9;"><strong>Monta o vídeo.</strong> Um clipe + um gancho + um título no template, em minutos.</div>
        </div>
        <div style="background: #0f071f; border: 1px solid rgba(192,132,252,0.2); padding: 16px; border-radius: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="font-family: 'Bebas Neue', sans-serif; font-size: 36px; color: #ff2a85; font-weight: bold; width: 30px; text-align: center;">3</div>
          <div style="font-size: 13px; color: #f1f5f9;"><strong>Publica e repete.</strong> Seguindo o calendário, todo dia, enquanto a onda cresce.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- O QUE VOCÊ RECEBE -->
  <section class="section-modules text-center">
    <div class="container">
      <div class="section-header">
        <h2>O QUE VOCÊ RECEBE</h2>
        <p>Acesso completo a todos os arquivos e materiais práticos:</p>
      </div>

      <div class="modules-list">
        <!-- ITEM 1 -->
        <div class="module-card">
          <div class="check-icon">✓</div>
          <div class="module-info">
            <h3>Arquivo Vice City</h3>
            <p>Biblioteca de clipes prontos pra editar e usar nos seus vídeos.</p>
          </div>
        </div>
        <!-- ITEM 2 -->
        <div class="module-card">
          <div class="check-icon">✓</div>
          <div class="module-info">
            <h3>Ganchos de Vice City</h3>
            <p>150 frases de abertura que prendem a atenção nos primeiros 3 segundos.</p>
          </div>
        </div>
        <!-- ITEM 3 -->
        <div class="module-card">
          <div class="check-icon">✓</div>
          <div class="module-info">
            <h3>Títulos e Legendas Otimizados</h3>
            <p>Textos prontos pra TikTok, Reels, Kwai e Shorts que os algoritmos recomendam.</p>
          </div>
        </div>
        <!-- ITEM 4 -->
        <div class="module-card">
          <div class="check-icon">✓</div>
          <div class="module-info">
            <h3>Molduras Vice City</h3>
            <p>Templates no Canva — só trocar o clipe e postar direto.</p>
          </div>
        </div>
        <!-- ITEM 5 -->
        <div class="module-card">
          <div class="check-icon">✓</div>
          <div class="module-info">
            <h3>Fórmula 500k</h3>
            <p>O método por trás dos posts que viralizaram de verdade.</p>
          </div>
        </div>
        <!-- ITEM 6 -->
        <div class="module-card">
          <div class="check-icon">✓</div>
          <div class="module-info">
            <h3>Rota Vice City</h3>
            <p>Calendário de 30 dias mostrando exatamente o que postar cada dia.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BÔNUS INCLUSOS -->
  <section class="section-bonuses text-center">
    <div class="container">
      <div class="bonus-box">
        <h2>🎁 BÔNUS EXCLUSIVOS INCLUSOS</h2>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 4px; margin-bottom: 16px;">Ferramentas extras para acelerar seus resultados desde o primeiro dia:</p>

        <div style="display: flex; flex-direction: column; gap: 12px; text-align: left;">
          <div style="background: #090412; border: 1px solid rgba(192,132,252,0.2); border-radius: 12px; padding: 14px; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
            🎁 <strong style="color: #fff;">Bônus 1 — Mapa de 30 sub-nichos de baixa concorrência:</strong> exatamente o que milhões vão pesquisar (money methods, segredos, melhores carros, roleplay...) e onde dá pra crescer rápido.
          </div>

          <div style="background: #090412; border: 1px solid rgba(192,132,252,0.2); border-radius: 12px; padding: 14px; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
            🎁 <strong style="color: #fff;">Bônus 2 — 60 roteiros curtos prontos</strong> pros sub-nichos.
          </div>

          <div style="background: #090412; border: 1px solid rgba(192,132,252,0.2); border-radius: 12px; padding: 14px; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
            🎁 <strong style="color: #fff;">Bônus 3 — Manual de chegada:</strong> do nome à primeira publicação, sem aparecer.
          </div>

          <div style="background: #090412; border: 1px solid rgba(192,132,252,0.2); border-radius: 12px; padding: 14px; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
            🎁 <strong style="color: #fff;">Bônus 4 — Mini guia de edição:</strong> tutorial rápido direto ao ponto no celular. Edite seus vídeos em menos de 5 minutos.
          </div>

          <div style="background: #090412; border: 1px solid rgba(192,132,252,0.2); border-radius: 12px; padding: 14px; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
            🎁 <strong style="color: #fff;">Bônus 5 — Checklist “Janela dos 5 Meses”:</strong> seu plano de ataque até o lançamento.
          </div>

          <div style="background: #150a10; border: 1px solid rgba(245,158,11,0.4); border-radius: 12px; padding: 14px; font-size: 13px; color: #cbd5e1; line-height: 1.5;">
            ⚡ <strong style="color: #fff;">Bônus de Ação Rápida (só pra quem entra no lote atual):</strong> toda vez que sair material novo de GTA VI, você recebe a atualização da biblioteca primeiro, sem pagar nada a mais.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DEPOIMENTOS -->
  <section class="section-testimonials text-center">
    <div class="container">
      <div class="section-header" style="margin-bottom: 16px;">
        <h2>DEPOIMENTOS</h2>
        <p>O que estão achando do Projeto Vice City:</p>
        <span class="swipe-indicator">Arraste &rarr;</span>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar-circle">👤</div>
            <div class="testimonial-info">
              <h4>[Nome]</h4>
              <div class="stars">★★★★★</div>
            </div>
          </div>
          <p class="testimonial-content">[depoimento a preencher: o material me ajudou muito a começar sem perder horas editando do zero.]</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar-circle">👤</div>
            <div class="testimonial-info">
              <h4>[Nome]</h4>
              <div class="stars">★★★★★</div>
            </div>
          </div>
          <p class="testimonial-content">[depoimento a preencher: os ganchos e molduras prontos facilitaram muito minha rotina de postagens.]</p>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar-circle">👤</div>
            <div class="testimonial-info">
              <h4>[Nome]</h4>
              <div class="stars">★★★★★</div>
            </div>
          </div>
          <p class="testimonial-content">[depoimento a preencher: consegui estruturar o canal mesmo sem ter o jogo e sem querer aparecer.]</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PREÇO -->
  <section class="section-pricing text-center">
    <div class="container">
      <div class="price-box">
        <div class="old-price">De R$ 67,00</div>
        <div style="font-size: 14px; color: var(--text-muted);">Por apenas</div>
        <div class="final-price"><span>R$</span>27,90</div>
        <div class="price-badge">ACESSO IMEDIATO • ÁREA DE MEMBROS</div>
        
        <br>
        <a href="${checkoutUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta">SIM! QUERO ACESSO POR R$ 27,90</a>
        <p class="microcopy">🔒 Pagamento 100% seguro • Acesso imediato em uma área de membros</p>
      </div>
    </div>
  </section>

  <!-- OBJEÇÕES (ACCORDION) -->
  <section class="section-faq text-center">
    <div class="container">
      <div class="section-header">
        <h2>DÚVIDAS FREQUENTES</h2>
        <p>Respostas diretas pras suas principais perguntas:</p>
      </div>

      <div class="accordion-list">
        <div class="accordion-item">
          <button class="accordion-btn" onclick="toggleFaq(this)">
            <span>Não vai estar saturado?</span>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-content">
            Não. O interesse por GTA VI está só no começo e vai explodir conforme a data de lançamento aproxima. Começar agora dá uma vantagem enorme em relação a quem esperar novembro.
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-btn" onclick="toggleFaq(this)">
            <span>Não sei editar vídeo</span>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-content">
            Não precisa! Entregamos um guia passo a passo do CapCut pra celular que você aprende em 5 minutos, além dos clipes e molduras já montados.
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-btn" onclick="toggleFaq(this)">
            <span>Não quero aparecer</span>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-content">
            Tudo bem! O método é 100% voltado para canais sem rosto. Você usa apenas a imagem do jogo, legendas visuais e voz quando desejar.
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-btn" onclick="toggleFaq(this)">
            <span>Não tenho o jogo nem console</span>
            <span class="accordion-icon">+</span>
          </button>
          <div class="accordion-content">
            Você não precisa do jogo. No Arquivo Vice City fornecemos os clipes e trechos em vídeo prontos para você utilizar sem ter que jogar nada.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- GARANTIA -->
  <section class="section-guarantee text-center">
    <div class="container">
      <div class="guarantee-box">
        <div class="guarantee-badge-icon">🛡️</div>
        <h3>GARANTIA DE 7 DIAS</h3>
        <p>Você tem 7 dias inteiros para testar o material. Se não ficar satisfeito por qualquer motivo, basta solicitar o reembolso e devolvemos 100% do seu dinheiro sem complicação.</p>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="section-final-cta text-center">
    <div class="container">
      <h2>Seu canal de GTA VI pronto para postar hoje</h2>
      <p>Aproveite o menor preço e garanta seu acesso ao método completo antes do lançamento.</p>

      <a href="${checkoutUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta">QUERO MEU CANAL DE GTA VI AGORA</a>
      <p class="microcopy">⚡ Acesso imediato em uma área de membros • Oferta por tempo limitado</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="text-center">
    <div class="container">
      <p>Projeto Vice City &copy; Todos os direitos reservados.</p>
      <p style="margin-top: 4px; opacity: 0.6;">Este site não possui vínculo oficial com a Rockstar Games ou Take-Two Interactive.</p>
    </div>
  </footer>

  <!-- VANILLA JS FOR ACCORDION & COUNTDOWN -->
  <script>
    // Accordion toggle logic
    function toggleFaq(button) {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    }

    // Dynamic countdown timer calculation to 19/11
    function updateCountdown() {
      const now = new Date();
      let launchYear = now.getFullYear();
      let targetDate = new Date(launchYear, 10, 19, 0, 0, 0); // 19 de Novembro (mês 10 em JS)

      if (now > targetDate) {
        targetDate = new Date(launchYear + 1, 10, 19, 0, 0, 0);
      }

      const diff = targetDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const daysEl = document.getElementById('days-count');
      if (daysEl) {
        daysEl.textContent = days;
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);
  </script>

</body>
</html>`;
}
