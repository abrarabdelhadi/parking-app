const bell = document.getElementById("bell");
const notifyDot = document.getElementById("notifyDot");

// simulate new notification
let hasNotification = true;
notifyDot.style.display = hasNotification ? "block" : "none";

bell.addEventListener("click", () => {
    notifyDot.style.display = "none";
    hasNotification = false;
});
