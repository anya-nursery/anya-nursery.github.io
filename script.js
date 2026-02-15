/* ================= SCROLL REVEAL ================= */
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


/* ================= LANGUAGE SWITCH ================= */
let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "kn" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  document.querySelector(".lang-btn").textContent =
    currentLang === "en" ? "ಕನ್ನಡ" : "English";
}


/* ================= WHATSAPP AUTO MESSAGE ================= */
function orderNow(plantName) {
  const message = encodeURIComponent(
    `Hello Anya Nursery 🌱\nI am interested in *${plantName}* black pepper plants.\nPlease share price & availability.`
  );

  window.open(`https://wa.me/919632666352?text=${message}`, "_blank");
}
