let seconds = 13 * 60 + 59;

function selectSlot(el) {
  if (el.classList.contains("taken")) return;

  document.querySelectorAll(".slot").forEach(slot => {
    slot.classList.remove("selected");
  });

  el.classList.add("selected");
  document.getElementById("spotNum").innerText = el.innerText;

  document.querySelector(".confirm").classList.add("active");
}

setInterval(() => {
  if (seconds <= 0) return;

  seconds--;

  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

    document.getElementById("time").innerText = `${m}:${s}`;
}, 1000);