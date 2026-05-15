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

// Image scroll reveal for mobile/tablet
const images = document.querySelectorAll("img");

function revealImagesOnScroll() {
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    const isInMiddle = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
    
    if (isInMiddle) {
      img.classList.add("color-active");
    } else {
      img.classList.remove("color-active");
    }
  });
}

// Detect if device is mobile/tablet (not laptop)
const isMobile = window.innerWidth <= 1024;

if (isMobile) {
  window.addEventListener("scroll", revealImagesOnScroll);
  revealImagesOnScroll();
}