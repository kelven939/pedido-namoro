const WHATSAPP_NUMBER = "258855977938";
const MESSAGE = "Sim, aceito ser sua namorada, Kelven Bulha! ❤️ Que comece a nossa linda história de amor💍💕";

const startButton = document.getElementById("startButton");
const messageSection = document.getElementById("mensagem");
const yesButton = document.getElementById("yesButton");
const modal = document.getElementById("successModal");
const whatsappButton = document.getElementById("whatsappButton");
const closeModal = document.getElementById("closeModal");
const thinkButton = document.getElementById("thinkButton");
const responseText = document.getElementById("responseText");

startButton.addEventListener("click", () => {
  messageSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section-hidden").forEach((section) => observer.observe(section));

yesButton.addEventListener("click", () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  burstHearts();
});

function closeSuccessModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeSuccessModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSuccessModal();
});

whatsappButton.addEventListener("click", () => {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("número de WhatsApp.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

thinkButton.addEventListener("click", () => {
  responseText.textContent = "Sem pressa. Quero que te sintas livre para pensar e responder com o coração. ❤️";
  thinkButton.textContent = "Obrigada por me dares tempo ♡";
  thinkButton.disabled = true;
  thinkButton.style.opacity = ".75";
});

const heartsContainer = document.getElementById("hearts");
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 18}px`;
  heart.style.animationDuration = `${9 + Math.random() * 9}s`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 18000);
}
setInterval(createHeart, 950);

function burstHearts() {
  for (let i = 0; i < 24; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = ["♥", "♡", "✦"][Math.floor(Math.random() * 3)];
      heart.style.left = `${15 + Math.random() * 70}%`;
      heart.style.bottom = `${Math.random() * 20}%`;
      heart.style.fontSize = `${14 + Math.random() * 20}px`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6500);
    }, i * 70);
  }
}