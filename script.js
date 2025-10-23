const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.example.flipcard";
const ITCH_IO_URL = "https://yourusername.itch.io/flipcard";

function startFlow(url) {
  window.open(url, "_blank");
}

function openEmail() {
  const to = encodeURIComponent("amarnathtiwari.games@gmail.com");
  const subject = encodeURIComponent("Feedback / Bug Report — FlipCard");
  const body = encodeURIComponent(`Hi Amarnath,\n\nI tried your FlipCard game and wanted to share:\n- Device / OS:\n- Game version:\n- Feedback / Bug details:\n\nThanks,\n[Your name]`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const href = btn.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
