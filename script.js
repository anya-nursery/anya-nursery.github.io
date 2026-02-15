/* =====================================================
   ANYA NURSERY — script.js
   Original logic fully preserved. New additions below.
====================================================== */

/* ─── SCROLL REVEAL (original) ────────────────────── */
const cards = document.querySelectorAll(".card");

const revealCards = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


/* ─── LANGUAGE SWITCH (original) ──────────────────── */
let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "kn" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  document.querySelector(".lang-btn").textContent =
    currentLang === "en" ? "ಕನ್ನಡ" : "English";
}


/* ─── WHATSAPP AUTO MESSAGE (original) ────────────── */
function orderNow(plantName) {
  const message = encodeURIComponent(
    `Hello Anya Nursery 🌱\nI am interested in *${plantName}* black pepper plants.\nPlease share price & availability.`
  );
  window.open(`https://wa.me/919632666352?text=${message}`, "_blank");
}


/* ─── NEW: COUNTER ANIMATION ──────────────────────── */
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = +el.dataset.target;
    if (!target) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let count = 0;
    const timer = setInterval(() => {
      count++;
      current += increment;
      if (count >= steps) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, duration / steps);
  });
}

/* Trigger counters when stats strip is in view */
const statsStrip = document.querySelector(".stats-strip");
if (statsStrip) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    },
    { threshold: 0.35 }
  );
  observer.observe(statsStrip);
}


/* ─── NEW: NAVBAR SCROLL SHADOW ───────────────────── */
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.45)";
      navbar.style.borderBottomColor = "rgba(34,197,94,0.18)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.borderBottomColor = "rgba(34,197,94,0.10)";
    }
  });
}


/* ─── NEW: SCROLL REVEAL FOR WHY/STEP/TESTIMONIAL ── */
const revealEls = document.querySelectorAll(
  ".why-card, .step, .testimonial, .stat-item, .contact-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  revealObserver.observe(el);
});


/* ─── NEW: ACTIVE NAV HIGHLIGHT ───────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a[href^='#']");

const activeNavObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active-nav"));
        const activeLink = document.querySelector(
          `.navbar nav a[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add("active-nav");
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => activeNavObserver.observe(section));

/* Add active-nav style dynamically */
const navStyle = document.createElement("style");
navStyle.textContent = `.active-nav { color: #22c55e !important; background: rgba(34,197,94,0.08) !important; }`;
document.head.appendChild(navStyle);
