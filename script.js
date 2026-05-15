const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("This is a SKOOLER JAMSTER demo by @chengleangm.");
  });
});

// Show images in color when scrolled on mobile and tablet only
const images = document.querySelectorAll("img");
let observer = null;

const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px"
};

const enableScrollEffect = () => {
  if (window.innerWidth <= 768) {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      }, observerOptions);

      images.forEach(img => {
        observer.observe(img);
      });
    }
  } else {
    if (observer) {
      images.forEach(img => {
        observer.unobserve(img);
        img.classList.remove("in-view");
      });
      observer = null;
    }
  }
};

// Initialize on load
enableScrollEffect();

// Re-check on resize
window.addEventListener("resize", enableScrollEffect);