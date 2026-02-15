<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO -->
  <title>Anya Nursery | Black Pepper Plants | Pepper Nursery Karnataka</title>
  <meta name="description" content="Anya Nursery offers premium black pepper plants with high yield and disease resistance. Order directly on WhatsApp or call us.">
  <meta name="keywords" content="Black Pepper Nursery, Pepper Plants, Pepper Farming, Karnataka Nursery">

  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

  <style>
    /* ─── TOKENS ─────────────────────────────────────────── */
    :root {
      --green-dark:  #1a3d1f;
      --green-mid:   #2e6b35;
      --green-light: #4caf50;
      --gold:        #c8882a;
      --gold-light:  #f0b840;
      --cream:       #faf7f2;
      --white:       #ffffff;
      --text-dark:   #1a1a1a;
      --text-mid:    #444;
      --text-light:  #777;
      --shadow:      0 4px 24px rgba(0,0,0,0.10);
      --radius:      14px;
      --transition:  0.3s ease;
    }

    /* ─── RESET ──────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Poppins', sans-serif;
      background: var(--cream);
      color: var(--text-dark);
      line-height: 1.7;
    }
    img { display: block; max-width: 100%; }
    a { text-decoration: none; }

    /* ─── FLOATING BUTTONS ───────────────────────────────── */
    .float-group {
      position: fixed;
      bottom: 28px;
      right: 22px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 999;
    }
    .float-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 13px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--white);
      box-shadow: 0 6px 20px rgba(0,0,0,0.22);
      transition: transform var(--transition), box-shadow var(--transition);
      cursor: pointer;
    }
    .float-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.28); }
    .float-wa  { background: #25d366; }
    .float-tel { background: var(--green-dark); }
    .float-btn img { width: 22px; height: 22px; }
    .float-btn svg { flex-shrink: 0; }

    /* ─── NAVBAR ─────────────────────────────────────────── */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--green-dark);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5%;
      height: 66px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    }
    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      color: var(--gold-light);
      letter-spacing: 0.5px;
    }
    nav { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    nav a {
      color: rgba(255,255,255,0.88);
      font-size: 0.88rem;
      font-weight: 500;
      padding: 6px 13px;
      border-radius: 6px;
      transition: background var(--transition), color var(--transition);
    }
    nav a:hover { background: rgba(255,255,255,0.12); color: var(--white); }

    /* NEW: Call button in navbar */
    .nav-call {
      display: flex;
      align-items: center;
      gap: 7px;
      background: var(--gold);
      color: var(--white) !important;
      padding: 7px 15px !important;
      border-radius: 8px !important;
      font-weight: 600 !important;
      font-size: 0.85rem !important;
      transition: background var(--transition) !important;
    }
    .nav-call:hover { background: var(--gold-light) !important; color: var(--text-dark) !important; }

    .lang-btn {
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--white);
      padding: 6px 13px;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      transition: background var(--transition);
    }
    .lang-btn:hover { background: rgba(255,255,255,0.25); }

    /* ─── ANNOUNCEMENT BAR (NEW) ─────────────────────────── */
    .announce-bar {
      background: var(--gold);
      color: var(--white);
      text-align: center;
      padding: 9px 16px;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.2px;
    }
    .announce-bar a { color: var(--white); font-weight: 700; text-decoration: underline; }

    /* ─── HERO ───────────────────────────────────────────── */
    .hero {
      background:
        linear-gradient(160deg, rgba(26,61,31,0.88) 40%, rgba(46,107,53,0.70) 100%),
        url('images/pepper1.jpg') center/cover no-repeat;
      min-height: 82vh;
      display: flex;
      align-items: center;
      padding: 80px 5% 60px;
      position: relative;
      overflow: hidden;
    }
    .hero::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0; right: 0;
      height: 60px;
      background: var(--cream);
      clip-path: ellipse(55% 100% at 50% 100%);
    }
    .hero-content { max-width: 620px; }
    .hero-badge {
      display: inline-block;
      background: var(--gold);
      color: var(--white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 5px 14px;
      border-radius: 50px;
      margin-bottom: 18px;
    }
    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 5vw, 3.2rem);
      color: var(--white);
      line-height: 1.2;
      margin-bottom: 16px;
    }
    .hero p {
      color: rgba(255,255,255,0.88);
      font-size: 1.05rem;
      margin-bottom: 32px;
    }
    .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
    .cta {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      background: #25d366;
      color: var(--white);
      font-weight: 700;
      padding: 14px 28px;
      border-radius: 50px;
      font-size: 0.95rem;
      box-shadow: 0 4px 18px rgba(37,211,102,0.35);
      transition: transform var(--transition), box-shadow var(--transition);
    }
    .cta:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(37,211,102,0.45); }

    /* NEW: secondary CTA – call */
    .cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      background: transparent;
      color: var(--white);
      font-weight: 600;
      padding: 13px 26px;
      border-radius: 50px;
      border: 2px solid rgba(255,255,255,0.55);
      font-size: 0.95rem;
      transition: background var(--transition), border-color var(--transition);
    }
    .cta-secondary:hover { background: rgba(255,255,255,0.12); border-color: var(--white); }

    /* ─── TRUST STRIP (NEW) ──────────────────────────────── */
    .trust-strip {
      background: var(--white);
      border-bottom: 1px solid #e8e2d8;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0;
    }
    .trust-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 18px 36px;
      border-right: 1px solid #e8e2d8;
      font-size: 0.88rem;
      color: var(--text-mid);
    }
    .trust-item:last-child { border-right: none; }
    .trust-icon { font-size: 1.5rem; }
    .trust-item strong { display: block; font-size: 0.95rem; color: var(--green-dark); }

    /* ─── SECTION BASE ───────────────────────────────────── */
    .section {
      padding: 72px 5%;
    }
    .section h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.6rem, 3.5vw, 2.2rem);
      color: var(--green-dark);
      margin-bottom: 36px;
      text-align: center;
    }

    /* ─── CARDS ──────────────────────────────────────────── */
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 28px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .card {
      background: var(--white);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: transform var(--transition), box-shadow var(--transition);
      display: flex;
      flex-direction: column;
    }
    .card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.14); }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-body { padding: 22px 20px 20px; flex: 1; display: flex; flex-direction: column; }
    .card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      color: var(--green-dark);
      margin-bottom: 8px;
    }
    .card p { font-size: 0.9rem; color: var(--text-mid); flex: 1; margin-bottom: 18px; }

    /* NEW: price tag on card */
    .card-price {
      font-size: 0.82rem;
      color: var(--gold);
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 14px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      background: var(--green-mid);
      color: var(--white);
      padding: 11px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      border: none;
      font-family: 'Poppins', sans-serif;
      transition: background var(--transition);
      text-align: center;
    }
    .btn:hover { background: var(--green-dark); }

    /* ─── WHY CHOOSE US (NEW) ────────────────────────────── */
    .why-section {
      background: var(--green-dark);
      padding: 72px 5%;
    }
    .why-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.6rem, 3.5vw, 2.2rem);
      color: var(--gold-light);
      text-align: center;
      margin-bottom: 48px;
    }
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 28px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .why-card {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius);
      padding: 30px 24px;
      text-align: center;
      transition: background var(--transition);
    }
    .why-card:hover { background: rgba(255,255,255,0.12); }
    .why-icon { font-size: 2.2rem; margin-bottom: 14px; }
    .why-card h3 { color: var(--white); font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
    .why-card p { color: rgba(255,255,255,0.70); font-size: 0.85rem; }

    /* ─── STATS STRIP (NEW) ──────────────────────────────── */
    .stats-strip {
      background: var(--gold);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0;
    }
    .stat-item {
      padding: 28px 48px;
      text-align: center;
      border-right: 1px solid rgba(255,255,255,0.3);
    }
    .stat-item:last-child { border-right: none; }
    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      color: var(--white);
      font-weight: 700;
      display: block;
    }
    .stat-label { font-size: 0.8rem; color: rgba(255,255,255,0.88); font-weight: 500; letter-spacing: 0.5px; }

    /* ─── ABOUT ──────────────────────────────────────────── */
    .about {
      background: var(--white);
      max-width: 100%;
    }
    .about-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 56px;
      align-items: center;
      max-width: 1050px;
      margin: 0 auto;
    }
    .about-text h2 {
      text-align: left;
      margin-bottom: 18px;
    }
    .about-text p {
      color: var(--text-mid);
      font-size: 0.95rem;
      margin-bottom: 14px;
    }
    .about-img {
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
    }
    .about-img img { width: 100%; height: 340px; object-fit: cover; }

    /* ─── HOW TO ORDER (NEW) ─────────────────────────────── */
    .steps-section { background: var(--cream); }
    .steps-section h2 { text-align: center; color: var(--green-dark); margin-bottom: 44px; }
    .steps {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      max-width: 960px;
      margin: 0 auto;
    }
    .step {
      background: var(--white);
      border-radius: var(--radius);
      padding: 30px 24px;
      text-align: center;
      flex: 1;
      min-width: 200px;
      max-width: 230px;
      box-shadow: var(--shadow);
      position: relative;
    }
    .step-num {
      width: 42px; height: 42px;
      background: var(--green-mid);
      color: var(--white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 1.1rem;
      margin: 0 auto 14px;
    }
    .step h3 { font-size: 0.95rem; color: var(--green-dark); font-weight: 600; margin-bottom: 6px; }
    .step p { font-size: 0.82rem; color: var(--text-light); }

    /* ─── TESTIMONIALS (NEW) ─────────────────────────────── */
    .testimonials-section { background: var(--white); }
    .testimonials-section h2 { text-align: center; }
    .testimonials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 24px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .testimonial {
      background: var(--cream);
      border-radius: var(--radius);
      padding: 26px 22px;
      border-left: 4px solid var(--green-mid);
    }
    .testimonial p { font-size: 0.9rem; color: var(--text-mid); font-style: italic; margin-bottom: 14px; }
    .testimonial-author { font-weight: 700; font-size: 0.85rem; color: var(--green-dark); }
    .testimonial-loc { font-size: 0.78rem; color: var(--text-light); }
    .stars { color: var(--gold); font-size: 0.9rem; margin-bottom: 10px; }

    /* ─── MAP ────────────────────────────────────────────── */
    .map-box {
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      max-width: 820px;
      margin: 0 auto;
    }
    .map-box iframe { width: 100%; height: 360px; border: none; display: block; }

    /* ─── CONTACT ────────────────────────────────────────── */
    .contact {
      background: var(--green-dark);
      text-align: center;
    }
    .contact h2 {
      color: var(--gold-light) !important;
      margin-bottom: 12px;
    }
    .contact .sub {
      color: rgba(255,255,255,0.72);
      font-size: 0.95rem;
      margin-bottom: 32px;
    }
    .contact-ctas {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .contact-call {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      background: var(--gold);
      color: var(--white);
      font-weight: 700;
      padding: 14px 28px;
      border-radius: 50px;
      font-size: 0.95rem;
      box-shadow: 0 4px 18px rgba(200,136,42,0.35);
      transition: transform var(--transition), box-shadow var(--transition);
    }
    .contact-call:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(200,136,42,0.45); }

    /* ─── FOOTER ─────────────────────────────────────────── */
    footer {
      background: #101f12;
      color: rgba(255,255,255,0.50);
      text-align: center;
      padding: 22px 16px;
      font-size: 0.82rem;
    }

    /* ─── RESPONSIVE ─────────────────────────────────────── */
    @media (max-width: 720px) {
      .about-inner { grid-template-columns: 1fr; gap: 30px; }
      .about-text h2 { text-align: center; }
      .trust-item { padding: 14px 20px; border-right: none; border-bottom: 1px solid #e8e2d8; width: 100%; justify-content: center; }
      .stat-item { padding: 20px 28px; }
      nav { gap: 4px; }
      nav a { padding: 5px 9px; font-size: 0.82rem; }
      .hero-ctas { flex-direction: column; }
      .cta, .cta-secondary { text-align: center; justify-content: center; }
    }
  </style>
</head>

<body>

<!-- ── ANNOUNCEMENT BAR (NEW) ─────────────────────────────── -->
<div class="announce-bar">
  🌿 Now supplying across Karnataka &amp; Kerala &nbsp;|&nbsp;
  <a href="tel:+919632666352">Call us: +91 96326 66352</a>
</div>

<!-- ── FLOATING BUTTONS ───────────────────────────────────── -->
<div class="float-group">
  <!-- Call -->
  <a href="tel:+919632666352" class="float-btn float-tel" title="Call Anya Nursery">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    Call Now
  </a>
  <!-- WhatsApp -->
  <a href="https://wa.me/919632666352" class="float-btn float-wa" target="_blank" title="WhatsApp Anya Nursery">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
    Chat Now
  </a>
</div>

<!-- ── HEADER ─────────────────────────────────────────────── -->
<header class="navbar">
  <div class="logo">🌱 Anya Nursery</div>
  <nav>
    <a href="#varieties" data-en="Varieties" data-kn="ವೈವಿಧ್ಯಗಳು">Varieties</a>
    <a href="#about"     data-en="About"     data-kn="ನಮ್ಮ ಬಗ್ಗೆ">About</a>
    <a href="#contact"   data-en="Contact"   data-kn="ಸಂಪರ್ಕ">Contact</a>
    <a href="tel:+919632666352" class="nav-call">
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      Call Us
    </a>
    <button class="lang-btn" onclick="toggleLanguage()">ಕನ್ನಡ</button>
  </nav>
</header>

<!-- ── HERO ───────────────────────────────────────────────── -->
<section class="hero">
  <div class="hero-content">
    <span class="hero-badge">Karnataka's Trusted Nursery</span>
    <h1 data-en="Premium Black Pepper Plants"
        data-kn="ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕಪ್ಪು ಮೆಣಸು ಸಸಿಗಳು">
      Premium Black Pepper Plants
    </h1>
    <p data-en="High-yield • Disease resistant • Trusted nursery"
       data-kn="ಹೆಚ್ಚು ಉತ್ಪಾದನೆ • ರೋಗ ನಿರೋಧಕ • ವಿಶ್ವಾಸಾರ್ಹ ನರ್ಸರಿ">
      High-yield &nbsp;•&nbsp; Disease resistant &nbsp;•&nbsp; Trusted nursery
    </p>
    <div class="hero-ctas">
      <a href="https://wa.me/919632666352" target="_blank" class="cta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" style="width:20px;height:20px;filter:brightness(10);">
        WhatsApp Enquiry
      </a>
      <a href="tel:+919632666352" class="cta-secondary">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        +91 96326 66352
      </a>
    </div>
  </div>
</section>

<!-- ── TRUST STRIP (NEW) ──────────────────────────────────── -->
<div class="trust-strip">
  <div class="trust-item">
    <span class="trust-icon">🌿</span>
    <div><strong>100% Genuine</strong>Certified plant varieties</div>
  </div>
  <div class="trust-item">
    <span class="trust-icon">🚚</span>
    <div><strong>Pan-Karnataka Delivery</strong>We ship across the state</div>
  </div>
  <div class="trust-item">
    <span class="trust-icon">🧑‍🌾</span>
    <div><strong>Expert Guidance</strong>Free farming consultation</div>
  </div>
  <div class="trust-item">
    <span class="trust-icon">📞</span>
    <div><strong>Direct Line</strong><a href="tel:+919632666352" style="color:var(--green-mid);font-weight:700;">+91 96326 66352</a></div>
  </div>
</div>

<!-- ── STATS (NEW) ────────────────────────────────────────── -->
<div class="stats-strip">
  <div class="stat-item">
    <span class="stat-num">500+</span>
    <span class="stat-label">Happy Farmers</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">3</span>
    <span class="stat-label">Premium Varieties</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">10+</span>
    <span class="stat-label">Years Experience</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">2</span>
    <span class="stat-label">States Served</span>
  </div>
</div>

<!-- ── VARIETIES ──────────────────────────────────────────── -->
<section id="varieties" class="section">
  <h2 data-en="🌶 Black Pepper Varieties"
      data-kn="🌶 ಕಪ್ಪು ಮೆಣಸು ವೈವಿಧ್ಯಗಳು">
    🌶 Black Pepper Varieties
  </h2>

  <div class="cards">

    <div class="card">
      <img src="images/pepper1.jpg" alt="Panniyur-1">
      <div class="card-body">
        <h3>Panniyur-1</h3>
        <div class="card-price">Most Popular · Best Yield</div>
        <p data-en="High yielding commercial variety. Ideal for large farms and commercial cultivation."
           data-kn="ಹೆಚ್ಚು ಉತ್ಪಾದನೆಯ ವಾಣಿಜ್ಯ ತಳಿ. ದೊಡ್ಡ ಜಮೀನಿಗೆ ಸೂಕ್ತ.">
          High yielding commercial variety. Ideal for large farms and commercial cultivation.
        </p>
        <a class="btn" onclick="orderNow('Panniyur-1')">
          Order on WhatsApp
        </a>
      </div>
    </div>

    <div class="card">
      <img src="images/pepper2.jpg" alt="Karimunda">
      <div class="card-body">
        <h3>Karimunda</h3>
        <div class="card-price">Traditional · Strong Aroma</div>
        <p data-en="Traditional variety with strong aroma. Preferred for premium quality spice markets."
           data-kn="ಪಾರಂಪರಿಕ ಮತ್ತು ಘಮಣಯುಕ್ತ ತಳಿ. ಉತ್ಕೃಷ್ಟ ಮಸಾಲೆ ಮಾರುಕಟ್ಟೆಗೆ ಸೂಕ್ತ.">
          Traditional variety with strong aroma. Preferred for premium quality spice markets.
        </p>
        <a class="btn" onclick="orderNow('Karimunda')">
          Order on WhatsApp
        </a>
      </div>
    </div>

    <div class="card">
      <img src="images/pepper3.jpg" alt="Sreekara">
      <div class="card-body">
        <h3>Sreekara</h3>
        <div class="card-price">Early Bearing · High Yield</div>
        <p data-en="Early bearing high yield variety. Starts producing faster — great for new farmers."
           data-kn="ತ್ವರಿತ ಫಲ ನೀಡುವ ತಳಿ. ಹೊಸ ರೈತರಿಗೆ ಉತ್ತಮ ಆಯ್ಕೆ.">
          Early bearing high yield variety. Starts producing faster — great for new farmers.
        </p>
        <a class="btn" onclick="orderNow('Sreekara')">
          Order on WhatsApp
        </a>
      </div>
    </div>

  </div>
</section>

<!-- ── WHY CHOOSE US (NEW) ────────────────────────────────── -->
<section class="why-section">
  <h2>⭐ Why Choose Anya Nursery?</h2>
  <div class="why-grid">
    <div class="why-card">
      <div class="why-icon">🧬</div>
      <h3>Scientifically Grown</h3>
      <p>Plants raised using modern nursery practices for maximum health and productivity.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🌱</div>
      <h3>Healthy Root Stock</h3>
      <p>Strong root systems ensure high survival rates and faster establishment.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🤝</div>
      <h3>Direct from Farm</h3>
      <p>No middlemen. Buy directly from the grower and save more on bulk orders.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">📦</div>
      <h3>Safe Packaging</h3>
      <p>Plants are carefully packed to survive transit and arrive in perfect condition.</p>
    </div>
  </div>
</section>

<!-- ── HOW TO ORDER (NEW) ─────────────────────────────────── -->
<section class="section steps-section">
  <h2 data-en="🛒 How to Order"
      data-kn="🛒 ಆರ್ಡರ್ ಹೇಗೆ ಮಾಡಬೇಕು">
    🛒 How to Order
  </h2>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <h3>Choose Variety</h3>
      <p>Pick the pepper variety that suits your farm and climate.</p>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <h3>Contact Us</h3>
      <p>WhatsApp or call us directly to discuss quantity and pricing.</p>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <h3>Confirm Order</h3>
      <p>We confirm availability and give you an estimated dispatch date.</p>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <h3>Receive Plants</h3>
      <p>Plants delivered safely to your doorstep or pick up from our nursery.</p>
    </div>
  </div>
</section>

<!-- ── ABOUT ───────────────────────────────────────────────── -->
<section id="about" class="section about">
  <div class="about-inner">
    <div class="about-text">
      <h2 data-en="🌿 About Anya Nursery"
          data-kn="🌿 ಅನ್ಯಾ ನರ್ಸರಿ ಬಗ್ಗೆ">
        🌿 About Anya Nursery
      </h2>
      <p data-en="We grow healthy pepper plants using scientific nursery methods."
         data-kn="ನಾವು ವೈಜ್ಞಾನಿಕ ವಿಧಾನದಲ್ಲಿ ಆರೋಗ್ಯಕರ ಮೆಣಸು ಸಸಿಗಳನ್ನು ಬೆಳೆಸುತ್ತೇವೆ.">
        We grow healthy pepper plants using scientific nursery methods.
      </p>
      <p>Located in Karnataka, Anya Nursery has been supplying high-quality black pepper planting material to farmers across the region for over a decade. We focus on genuine, disease-free varieties that give you the best returns.</p>
      <p>Our team provides free guidance on planting, care, and management — because we believe your success is our success.</p>
    </div>
    <div class="about-img">
      <img src="images/pepper2.jpg" alt="Anya Nursery farm">
    </div>
  </div>
</section>

<!-- ── TESTIMONIALS (NEW) ─────────────────────────────────── -->
<section class="section testimonials-section">
  <h2 data-en="💬 What Farmers Say"
      data-kn="💬 ರೈತರ ಅನುಭವ">
    💬 What Farmers Say
  </h2>
  <div class="testimonials">
    <div class="testimonial">
      <div class="stars">★★★★★</div>
      <p>"Ordered Panniyur-1 plants last season. Very healthy root stock and survived transit perfectly. Highly recommend Anya Nursery!"</p>
      <div class="testimonial-author">Ravi Kumar</div>
      <div class="testimonial-loc">Shivamogga, Karnataka</div>
    </div>
    <div class="testimonial">
      <div class="stars">★★★★★</div>
      <p>"Great service and the plants are thriving. They answered all my questions on WhatsApp quickly. Very professional team."</p>
      <div class="testimonial-author">Suresh Nair</div>
      <div class="testimonial-loc">Kozhikode, Kerala</div>
    </div>
    <div class="testimonial">
      <div class="stars">★★★★☆</div>
      <p>"Best nursery for Karimunda variety in the region. Bulk order was handled smoothly. Will definitely order again this season."</p>
      <div class="testimonial-author">Manjunath Gowda</div>
      <div class="testimonial-loc">Chikkamagaluru, Karnataka</div>
    </div>
  </div>
</section>

<!-- ── LOCATION ────────────────────────────────────────────── -->
<section class="section">
  <h2 data-en="📍 Our Location"
      data-kn="📍 ನಮ್ಮ ಸ್ಥಳ">
    📍 Our Location
  </h2>
  <div class="map-box">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3892.4228041652846!2d75.54744907507165!3d12.685803987603885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQxJzA4LjkiTiA3NcKwMzMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1771136883785!5m2!1sen!2sin"
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>

<!-- ── CONTACT ─────────────────────────────────────────────── -->
<section id="contact" class="section contact">
  <h2>📞 Get In Touch</h2>
  <p class="sub">We're available Monday – Saturday, 8 AM to 7 PM</p>
  <div class="contact-ctas">
    <a href="https://wa.me/919632666352" target="_blank" class="cta">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" style="width:20px;height:20px;filter:brightness(10);">
      Chat on WhatsApp
    </a>
    <a href="tel:+919632666352" class="contact-call">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      Call +91 96326 66352
    </a>
  </div>
</section>

<footer>
  © 2026 Anya Nursery &nbsp;·&nbsp; Karnataka, India
</footer>

<script src="script.js"></script>
<script>
  // orderNow — sends WhatsApp message with selected variety
  function orderNow(variety) {
    const msg = encodeURIComponent(
      `Hello Anya Nursery! I'm interested in ordering *${variety}* black pepper plants. Please share availability and pricing.`
    );
    window.open(`https://wa.me/919632666352?text=${msg}`, '_blank');
  }

  // Language toggle (unchanged logic, extended to new elements)
  let isKannada = false;
  function toggleLanguage() {
    isKannada = !isKannada;
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = isKannada ? el.dataset.kn : el.dataset.en;
    });
    document.querySelector('.lang-btn').textContent = isKannada ? 'English' : 'ಕನ್ನಡ';
  }
</script>

</body>
</html>
