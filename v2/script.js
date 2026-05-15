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

// Image scroll reveal for mobile/tablet - Center detection
const allImages = document.querySelectorAll("img");
let scrollTimeout;

function checkImageInCenter() {
  const windowHeight = window.innerHeight;
  const centerThreshold = windowHeight / 2;

  allImages.forEach(img => {
    // Get image position relative to viewport
    const rect = img.getBoundingClientRect();
    const imageCenter = rect.top + rect.height / 2;
    
    // Check if image center is near viewport center (with tolerance)
    const distanceFromCenter = Math.abs(imageCenter - centerThreshold);
    const tolerance = windowHeight * 0.4; // 40% tolerance
    
    if (distanceFromCenter < tolerance && rect.height > 0) {
      img.classList.add("color-active");
    } else {
      img.classList.remove("color-active");
    }
  });
}

// Detect if device is mobile/tablet
const isMobileDevice = window.innerWidth <= 1024;

if (isMobileDevice) {
  // Check on page load
  window.addEventListener("load", () => {
    setTimeout(checkImageInCenter, 200);
  });
  
  // Check on scroll - optimized
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkImageInCenter, 30);
  }, { passive: true });
  
  // Initial check
  setTimeout(checkImageInCenter, 100);
}