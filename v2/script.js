const tabButtons = document.querySelectorAll(".tabs button");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = form.querySelector("input");

  if (input.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }

  alert("Thank you for subscribing to SKOOLER JAMSTER.");
  input.value = "";
});