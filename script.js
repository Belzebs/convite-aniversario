// PERSONALIZE AQUI: troque a URL abaixo pelo link real do formulário de confirmação.
const RSVP_URL = "https://convitin.com.br/aniversario-do-antony-9/";

// Carrosséis simples: avançam um cartão por vez e voltam ao início ao chegar ao fim.
function setupCarousel(trackId, dotsId = null) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const cards = Array.from(track.children);
  let index = 0;
  const dots = dotsId ? document.getElementById(dotsId) : null;

  function visibleCards() {
    return window.matchMedia("(max-width: 760px)").matches ? 1 : (trackId === "video-track" ? 2 : 3);
  }
  function maxIndex() {
    return Math.max(0, cards.length - visibleCards());
  }
  function render() {
    index = Math.min(index, maxIndex());
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
    if (dots) {
      dots.innerHTML = "";
      cards.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = i === index ? "active" : "";
        dot.setAttribute("aria-label", `Ir para foto ${i + 1}`);
        dot.addEventListener("click", () => { index = Math.min(i, maxIndex()); render(); });
        dots.appendChild(dot);
      });
    }
  }
  const section = track.closest(".carousel");
  section?.querySelector(".prev")?.addEventListener("click", () => { index = index <= 0 ? maxIndex() : index - 1; render(); });
  section?.querySelector(".next")?.addEventListener("click", () => { index = index >= maxIndex() ? 0 : index + 1; render(); });
  window.addEventListener("resize", render);
  render();
}

setupCarousel("photo-track", "photo-dots");
setupCarousel("video-track");

// Player de música: não inicia sozinho. O visitante escolhe quando reproduzir/pausar.
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");
const musicLabel = document.getElementById("music-label");
const musicStatus = document.getElementById("music-status");
const volume = document.getElementById("music-volume");

music.volume = Number(volume.value);
volume.addEventListener("input", () => { music.volume = Number(volume.value); });

function updateMusicControls(isPlaying) {
  musicIcon.textContent = isPlaying ? "Ⅱ" : "▶";
  musicLabel.textContent = isPlaying ? "Pausar música" : "Reproduzir música";
  musicStatus.textContent = isPlaying ? "A música está tocando." : "A música está pausada.";
}
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      updateMusicControls(true);
    } catch (error) {
      musicStatus.textContent = "Não foi possível reproduzir. Confira se assets/musica/musica.mp3 foi adicionado.";
    }
  } else {
    music.pause();
    updateMusicControls(false);
  }
});
music.addEventListener("ended", () => updateMusicControls(false));
music.addEventListener("pause", () => updateMusicControls(false));
music.addEventListener("play", () => updateMusicControls(true));

// Atualiza o botão de confirmação usando o endereço configurado no início deste arquivo.
const rsvpLink = document.getElementById("rsvp-link");
rsvpLink.href = RSVP_URL;
if (RSVP_URL === "https://example.com") {
  rsvpLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Antes de publicar, substitua RSVP_URL no arquivo script.js pelo link de confirmação da sua festa.");
  });
}