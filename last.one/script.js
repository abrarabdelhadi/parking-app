document.getElementById("notification").addEventListener("click", function () {
  document.getElementById("notifyDot").style.display = "none";
});

document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Reservation Confirmed!");
});
