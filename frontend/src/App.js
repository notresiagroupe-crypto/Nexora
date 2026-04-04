import { useEffect } from "react";
import "@/App.css";

function App() {
  useEffect(() => {
    // Cursor animation
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    function animCursor() {
      if (cursor && ring) {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(animCursor);
    }
    animCursor();

    // Reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => obs.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const switchTab = (tab) => {
    const tabs = ['all', 'web', 'bot', 'social'];
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      btn.classList.toggle('active', tabs[i] === tab);
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('tab-' + tab);
    if (panel) {
      panel.classList.add('active');
      const obs = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
          }
        });
      }, { threshold: 0.1 });
      panel.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
        obs.observe(el);
      });
    }
  };

  const openModal = (type) => {
    let content = "";
    if (type === "bot") {
      content = `<h2>Démo Bot Trading</h2><iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>`;
    }
    if (type === "site") {
      content = `<h2>Démo Site</h2><iframe src="https://ton-site.com" width="100%" height="400"></iframe>`;
    }
    if (type === "ia") {
      content = `<h2>Démo IA</h2><iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>`;
    }
    const modalBody = document.getElementById("modal-body");
    const modal = document.getElementById("modal");
    if (modalBody && modal) {
      modalBody.innerHTML = content;
      modal.style.display = "block";
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav>
        <a href="#" className="nav-logo">NEX<span>.</span>ORA</a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#realisations">Réalisations</a></li>
          <li><a href="#profils">Profils</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <a href="https://www.malt.fr/profile/" target="_blank" rel="noopener noreferrer" className="nav-social">Malt</a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="nav-social">LinkedIn</a>
          <a href="#contact" className="nav-cta">Démarrer →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-tag">Studio · Bordeaux · 2026</div>
        <h1 className="hero-title">
          <span className="line"><span>NEXORA</span></span>
          <span className="line"><span className="stroke">BUILD</span> <span className="accent">SMART.</span></span>
          <span className="line"><span>GROW FAST.</span></span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">Web, réseaux sociaux, automatisation IA — on crée des outils digitaux qui travaillent pour vous. Pour les PME bordelaises qui veulent passer au niveau supérieur.</p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">Démarrer un projet →</a>
            <a href="#realisations" className="btn-ghost">Voir les réalisations</a>
          </div>
          <div className="hero-counter">
            <div className="num">3×</div>
            <div className="label">Leviers de croissance</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">Web Design <span className="dot">✦</span></span>
          <span className="marquee-item">Développement <span className="dot">✦</span></span>
          <span className="marquee-item">Social Media <span className="dot">✦</span></span>
          <span className="marquee-item">Automation IA <span className="dot">✦</span></span>
          <span className="marquee-item">Bordeaux <span className="dot">✦</span></span>
          <span className="marquee-item">Malt Verified <span className="dot">✦</span></span>
          <span className="marquee-item">Bot Telegram <span className="dot">✦</span></span>
          <span className="marquee-item">PME & TPE <span className="dot">✦</span></span>
          <span className="marquee-item">Web Design <span className="dot">✦</span></span>
          <span className="marquee-item">Développement <span className="dot">✦</span></span>
          <span className="marquee-item">Social Media <span className="dot">✦</span></span>
          <span className="marquee-item">Automation IA <span className="dot">✦</span></span>
          <span className="marquee-item">Bordeaux <span className="dot">✦</span></span>
          <span className="marquee-item">Malt Verified <span className="dot">✦</span></span>
          <span className="marquee-item">Bot Telegram <span className="dot">✦</span></span>
          <span className="marquee-item">PME & TPE <span className="dot">✦</span></span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section-wrap" id="services">
        <div className="section-header reveal">
          <div><div className="section-num">01 — Services</div><h2 className="section-title">Ce qu'on<br/>fait pour vous</h2></div>
          <p className="section-sub">Trois expertises complémentaires, un seul interlocuteur.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="svc-num">01</div><div className="svc-icon">◈</div>
            <h3 className="svc-name">Création<br/>Web</h3>
            <p className="svc-desc">Sites vitrines, landing pages et e-commerces conçus pour convertir. Design sur mesure, mobile-first, rapide.</p>
            <div className="svc-tags"><span className="svc-tag">HTML/CSS</span><span className="svc-tag">React</span><span className="svc-tag">Next.js</span><span className="svc-tag">Responsive</span></div>
          </div>
          <div className="service-card reveal">
            <div className="svc-num">02</div><div className="svc-icon">◐</div>
            <h3 className="svc-name">Social<br/>Media</h3>
            <p className="svc-desc">Stratégie de contenu, gestion de comptes Instagram & LinkedIn, visuels et copywriting qui engagent votre audience.</p>
            <div className="svc-tags"><span className="svc-tag">Instagram</span><span className="svc-tag">LinkedIn</span><span className="svc-tag">Contenu</span><span className="svc-tag">Analyse</span></div>
          </div>
          <div className="service-card reveal">
            <div className="svc-num">03</div><div className="svc-icon">⬡</div>
            <h3 className="svc-name">Automation<br/>IA</h3>
            <p className="svc-desc">Chatbots, flux automatisés, réponses clients 24/7. On connecte vos outils pour vous faire gagner des heures chaque semaine.</p>
            <div className="svc-tags"><span className="svc-tag">Chatbot</span><span className="svc-tag">Python</span><span className="svc-tag">Zapier</span><span className="svc-tag">API</span></div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="section-wrap bg-gray" id="realisations">
        <div className="section-header reveal">
          <div><div className="section-num">02 — Réalisations</div><h2 className="section-title">Nos<br/>projets</h2></div>
          <p className="section-sub">Exemples concrets de ce qu'on livre — sites, bots, social.</p>
        </div>
        <div className="projects-tabs reveal">
          <button className="tab-btn active" onClick={() => switchTab('all')}>Tout voir</button>
          <button className="tab-btn" onClick={() => switchTab('web')}>Sites Web</button>
          <button className="tab-btn" onClick={() => switchTab('bot')}>Bots & IA</button>
          <button className="tab-btn" onClick={() => switchTab('social')}>Social Media</button>
        </div>

        <div className="tab-panel active" id="tab-all">
          <div className="projects-grid">
            {/* BARA */}
            <div className="project-card reveal">
              <div className="project-preview" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="preview-bar"><div className="pd r"></div><div className="pd y"></div><div className="pd g"></div><div className="preview-url">bara-bordeaux.fr</div></div>
                <div className="preview-inner"><div className="bara-preview">
                  <div className="bara-name">BARA</div>
                  <div className="bara-sub-text">Afro-Cameroonian Street Food · Bordeaux</div>
                  <div className="bara-chips"><span className="bara-chip">UberEats</span><span className="bara-chip">Deliveroo</span><span className="bara-chip">Sur place</span></div>
                </div></div>
              </div>
              <div className="project-info">
                <div className="project-type">Site Vitrine · Restauration</div>
                <div className="project-name">BARA Restaurant</div>
                <p className="project-desc">Site complet pour restaurant afro-camerounais à Bordeaux. Brand extraction, menu, liens livraison, réservation.</p>
              </div>
              <div className="project-footer"><span className="project-tag">HTML/CSS</span><span className="project-tag">Brand Design</span><span className="project-tag">Restauration</span></div>
            </div>
            {/* NEXORA PORTFOLIO */}
            <div className="project-card reveal">
              <div className="project-preview" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="preview-bar"><div className="pd r"></div><div className="pd y"></div><div className="pd g"></div><div className="preview-url">nexora-studio.vercel.app</div></div>
                <div className="preview-inner"><div className="portfolio-preview">
                  <div className="pp-tag">Agency · Bordeaux</div>
                  <div className="pp-title">NEXORA STUDIO</div>
                  <div className="pp-pill">Kinetic Brutalism</div>
                </div></div>
              </div>
              <div className="project-info">
                <div className="project-type">Portfolio Agency</div>
                <div className="project-name">NEXORA Studio</div>
                <p className="project-desc">Portfolio avec démos sectorielles — restaurant, coach, salon, nail art. Animations CSS, dark UI, scroll reveal.</p>
              </div>
              <div className="project-footer"><span className="project-tag">Dark UI</span><span className="project-tag">Animations</span><span className="project-tag">Multi-secteur</span></div>
            </div>
            {/* BOT */}
            <div className="project-card reveal">
              <div className="project-preview">
                <div className="bot-preview">
                  <div className="bl"><span className="bp">$</span><span className="bt b">python bot.py — started</span></div>
                  <div className="bl"><span className="bp">→</span><span className="bt">Listening Telegram channel...</span></div>
                  <div className="bl"><span className="bp">✦</span><span className="bt o">Signal: BTC/USDT LONG</span></div>
                  <div className="bl"><span className="bp"> </span><span className="bt">Entry: 67,420 | SL: 66,800</span></div>
                  <div className="bl"><span className="bp"> </span><span className="bt">TP1: 68,200 | TP2: 69,000</span></div>
                  <div className="bl"><span className="bp">✓</span><span className="bt g">Forwarded → Cornix group</span></div>
                  <div className="bl"><span className="bp">✓</span><span className="bt g">Logged → history.csv</span></div>
                  <div className="bl"><span className="bp">$</span><span className="bt">Uptime: 99.9% <span className="bcursor"></span></span></div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">Bot Automation · Python</div>
                <div className="project-name">Crypto Copy-Trading Bot</div>
                <p className="project-desc">Lit les signaux d'un canal Telegram, parse Entry/TP/SL, forward à Cornix, exécute sur Coinbase. 24/7 sur Replit.</p>
              </div>
              <div className="project-footer"><span className="project-tag">Python</span><span className="project-tag">Telegram API</span><span className="project-tag">Coinbase</span><span className="project-tag">Replit</span></div>
            </div>
            {/* SOCIAL */}
            <div className="project-card reveal">
              <div className="project-preview">
                <div className="social-preview">
                  <div className="sp-label">Content Strategy · 30 jours</div>
                  <div className="sp-grid">
                    <div className="sp-card ig">IG</div>
                    <div className="sp-card li">in</div>
                    <div style={{gridColumn: '1/-1'}}><div className="sp-bar"><div className="sp-avatar">N</div><div className="sp-text">12 posts / mois · Lun, Mer, Ven</div></div></div>
                  </div>
                  <div className="sp-stat">+342% reach moyen</div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">Social Media Management</div>
                <div className="project-name">Gestion Réseaux Sociaux</div>
                <p className="project-desc">Stratégie éditoriale, création de visuels, programmation et reporting mensuel pour Instagram et LinkedIn.</p>
              </div>
              <div className="project-footer"><span className="project-tag">Instagram</span><span className="project-tag">LinkedIn</span><span className="project-tag">Analytics</span></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="tab-web">
          <div className="projects-grid">
            <div className="project-card reveal">
              <div className="project-preview" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="preview-bar"><div className="pd r"></div><div className="pd y"></div><div className="pd g"></div><div className="preview-url">bara-bordeaux.fr</div></div>
                <div className="preview-inner"><div className="bara-preview"><div className="bara-name">BARA</div><div className="bara-sub-text">Street Food · Bordeaux</div></div></div>
              </div>
              <div className="project-info">
                <div className="project-type">Site Vitrine · Restauration</div>
                <div className="project-name">BARA Restaurant</div>
                <p className="project-desc">Site vitrine complet avec brand design sur mesure, menu en ligne et intégration des plateformes de livraison.</p>
              </div>
              <div className="project-footer"><span className="project-tag">HTML/CSS</span><span className="project-tag">Brand Design</span></div>
            </div>
            <div className="project-card reveal">
              <div className="project-preview">
                <div className="coach-preview">
                  <div className="coach-label">Sports Coach · Bordeaux</div>
                  <div className="coach-title">PUSH YOUR<br/>LIMITS</div>
                  <div className="coach-line"></div>
                  <div className="coach-sub">Suivi personnalisé · Résultats garantis</div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">Site Vitrine · Sport</div>
                <div className="project-name">Coach Sportif</div>
                <p className="project-desc">Landing page pour coach indépendant avec prise de RDV intégrée, témoignages et programme détaillé.</p>
              </div>
              <div className="project-footer"><span className="project-tag">HTML</span><span className="project-tag">Sport</span><span className="project-tag">RDV</span></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="tab-bot">
          <div className="projects-grid">
            <div className="project-card reveal">
              <div className="project-preview">
                <div className="bot-preview">
                  <div className="bl"><span className="bp">$</span><span className="bt b">python bot.py — started</span></div>
                  <div className="bl"><span className="bp">✦</span><span className="bt o">Signal: BTC/USDT LONG</span></div>
                  <div className="bl"><span className="bp"> </span><span className="bt">Entry: 67,420 | SL: 66,800</span></div>
                  <div className="bl"><span className="bp">✓</span><span className="bt g">Forwarded → Cornix</span></div>
                  <div className="bl"><span className="bp">✓</span><span className="bt g">Logged → history.csv</span></div>
                  <div className="bl"><span className="bp">$</span><span className="bt">Uptime: 99.9% <span className="bcursor"></span></span></div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">Bot Trading · Python</div>
                <div className="project-name">Crypto Copy-Trading Bot</div>
                <p className="project-desc">Signaux Telegram → parsing → Cornix → Coinbase. Logs CSV, déploiement 24/7 Replit + UptimeRobot.</p>
              </div>
              <div className="project-footer"><span className="project-tag">Python</span><span className="project-tag">Telegram API</span><span className="project-tag">Coinbase</span></div>
            </div>
            <div className="project-card reveal">
              <div className="project-preview">
                <div className="auto-preview">
                  <div className="auto-lbl">Assistant Client · 24/7</div>
                  <div className="auto-flow">
                    <div className="auto-node t">💬</div>
                    <div className="auto-arrow">──→</div>
                    <div className="auto-node a">🤖</div>
                    <div className="auto-arrow">──→</div>
                    <div className="auto-node d">✓</div>
                  </div>
                  <div className="auto-lbl">Message → IA → Réponse auto</div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">Chatbot & Automation</div>
                <div className="project-name">Assistant Client IA</div>
                <p className="project-desc">Chatbot intégré au site ou WhatsApp. Répond aux FAQ, qualifie les leads et prend des RDV automatiquement.</p>
              </div>
              <div className="project-footer"><span className="project-tag">Python</span><span className="project-tag">OpenAI</span><span className="project-tag">WhatsApp</span></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="tab-social">
          <div className="projects-grid">
            <div className="project-card reveal">
              <div className="project-preview">
                <div className="social-preview">
                  <div className="sp-label">Content Plan · 30 jours</div>
                  <div className="sp-grid"><div className="sp-card ig">IG</div><div className="sp-card li">in</div><div style={{gridColumn: '1/-1'}}><div className="sp-bar"><div className="sp-avatar">N</div><div className="sp-text">12 posts / mois · Lun, Mer, Ven</div></div></div></div>
                  <div className="sp-stat">+342% reach moyen</div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">Social Media · PME</div>
                <div className="project-name">Gestion Complète Réseaux</div>
                <p className="project-desc">Stratégie éditoriale, création de visuels, programmation et reporting mensuel pour Instagram et LinkedIn.</p>
              </div>
              <div className="project-footer"><span className="project-tag">Instagram</span><span className="project-tag">LinkedIn</span><span className="project-tag">Analytics</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILS */}
      <section className="section-wrap" id="profils">
        <div className="section-header reveal">
          <div><div className="section-num">03 — Profils</div><h2 className="section-title">On est<br/>vérifiés</h2></div>
          <p className="section-sub">Retrouvez-nous sur les plateformes pro — avis, portfolio, tarifs.</p>
        </div>
        <div className="profils-grid">
          <a href="https://www.malt.fr/profile/" target="_blank" rel="noopener noreferrer" className="profil-card malt reveal">
            <div className="profil-logo"><div className="profil-logo-icon malt">m</div><div className="profil-logo-name">MALT</div></div>
            <div className="profil-headline">Freelance vérifié<br/>sur Malt</div>
            <p className="profil-desc">Profil avec historique de missions, avis clients et tarifs transparents. Paiement sécurisé via la plateforme.</p>
            <div className="profil-cta">Voir le profil Malt →</div>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="profil-card li reveal">
            <div className="profil-logo"><div className="profil-logo-icon linkedin">in</div><div className="profil-logo-name">LINKEDIN</div></div>
            <div className="profil-headline">Profil pro<br/>sur LinkedIn</div>
            <p className="profil-desc">Parcours complet, compétences validées, recommandations et publications sur le web, l'IA et le digital.</p>
            <div className="profil-cta">Voir le profil LinkedIn →</div>
          </a>
        </div>
      </section>

      {/* WHY */}
      <section className="section-wrap bg-gray">
        <div className="why-grid">
          <div className="reveal">
            <div className="big-text"><div>POUR<br/>QUOI</div><div><em>NEXO</em></div><div className="hi">RA ?</div></div>
          </div>
          <div className="reveal">
            <div className="why-points">
              <div className="why-point"><span className="wn">01</span><div><h4>Bordeaux, on se connaît</h4><p>On travaille avec des PME locales. On comprend vos enjeux, votre marché, votre clientèle bordelaise.</p></div></div>
              <div className="why-point"><span className="wn">02</span><div><h4>Tout-en-un, sans prise de tête</h4><p>Web + réseaux + IA dans un seul package. Pas besoin de coordonner trois prestataires différents.</p></div></div>
              <div className="why-point"><span className="wn">03</span><div><h4>Résultats mesurables</h4><p>Chaque projet a des objectifs clairs : trafic, leads, temps gagné. On livre des chiffres, pas des promesses.</p></div></div>
              <div className="why-point"><span className="wn">04</span><div><h4>Réactif et disponible</h4><p>Un problème ? Une idée ? On répond vite. Pas de ticket support. Du vrai contact humain.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION RÉALISATIONS */}
      <section className="section-wrap" id="projects">
        <div className="section-header reveal">
          <div>
            <div className="section-num">04 — Réalisations</div>
            <h2 className="section-title">Ce qu'on<br/>a déjà créé</h2>
          </div>
          <p className="section-sub">Des exemples concrets de ce qu'on peut faire pour vous.</p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal">
            <div className="svc-num">01</div>
            <div className="svc-icon">⚙️</div>
            <h3 className="svc-name">Bot Trading</h3>
            <p className="svc-desc">
              Bot automatisé connecté à Telegram et Coinbase, capable de lire des signaux et exécuter des ordres automatiquement.
            </p>
            <div className="svc-tags">
              <span className="svc-tag">Python</span>
              <span className="svc-tag">API</span>
              <span className="svc-tag">Automation</span>
            </div>
          </div>

          <div className="service-card reveal">
            <div className="svc-num">02</div>
            <div className="svc-icon">🌐</div>
            <h3 className="svc-name">Site Vitrine</h3>
            <p className="svc-desc">
              Création de sites modernes, rapides et optimisés pour convertir les visiteurs en clients.
            </p>
            <div className="svc-tags">
              <span className="svc-tag">HTML/CSS</span>
              <span className="svc-tag">UI/UX</span>
              <span className="svc-tag">Responsive</span>
            </div>
          </div>

          <div className="service-card reveal">
            <div className="svc-num">03</div>
            <div className="svc-icon">🤖</div>
            <h3 className="svc-name">Automation IA</h3>
            <p className="svc-desc">
              Mise en place de systèmes automatisés : réponses clients, workflows, gain de temps et productivité.
            </p>
            <div className="svc-tags">
              <span className="svc-tag">Chatbot</span>
              <span className="svc-tag">Zapier</span>
              <span className="svc-tag">IA</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-eyebrow">On commence quand vous voulez</div>
        <h2 className="cta-title reveal">Prêt à<br/><span>passer au</span><br/>niveau sup ?</h2>
        <p className="cta-desc reveal">Premier échange offert. On analyse votre situation et on vous propose un plan d'action — sans engagement.</p>
        <div className="reveal"><a href="https://t.me/lionel_web" className="btn-primary" target="_blank" rel="noopener noreferrer">Écrire sur Telegram →</a></div>
        <div className="cta-contacts reveal">
          <a href="mailto:notresiagroupe@gmail.com" className="cta-contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            notresiagroupe@gmail.com
          </a>
          <a href="https://t.me/lionel_web" target="_blank" rel="noopener noreferrer" className="cta-contact">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.94 8.14-2.02 9.53c-.15.67-.54.84-1.09.52l-3-2.21-1.45 1.4c-.16.16-.3.3-.61.3l.22-3.1 5.6-5.06c.24-.22-.05-.34-.38-.12L6.55 13.96l-2.96-.92c-.64-.2-.65-.64.14-.95l11.56-4.46c.53-.19 1 .13.65.51z"/></svg>
            @lionel_web
          </a>
          <a href="https://instagram.com/id_lionel" target="_blank" rel="noopener noreferrer" className="cta-contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            @id_lionel
          </a>
          <a href="https://www.malt.fr/profile/tonprofil" target="_blank" rel="noopener noreferrer" className="cta-contact">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"/>
            </svg>
            Malt
          </a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="cta-contact">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 5 3.87 6 2.5 6S0 5 0 3.5 1.11 1 2.48 1 4.98 2 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-5v-7.7c0-1.8-.1-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-5V8z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">NEX<span>.</span>ORA STUDIO</div>
        <div className="footer-links">
          <a href="https://www.malt.fr/profile/" target="_blank" rel="noopener noreferrer">Malt</a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/id_lionel" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://t.me/lionel_web" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
        <div className="footer-copy">© 2026 NEXORA Studio — Bordeaux</div>
      </footer>

      {/* MODAL */}
      <div id="modal" className="modal">
        <div className="modal-content">
          <span onClick={closeModal} style={{float: 'right', cursor: 'pointer', fontSize: '2rem'}}>×</span>
          <div id="modal-body"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
