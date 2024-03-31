// Image Slider JavaScript Code
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slidesNum = document.querySelectorAll(".slides");

  for (i = 0; i < slidesNum.length; i++) {
    slidesNum[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slidesNum.length) {
    slideIndex = 1;
  }

  slidesNum[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}

// Navbar JavaScript Code
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Animation JavaScript Code
const cards = document.querySelectorAll(".animate");
const animations = ["fade-left", "fade-right", "fade-top", "fade-bottom"];
const animationPoint = 50;

function isInView(element) {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return (
    elementTop <= window.innerHeight - animationPoint && elementBottom >= 0
  );
}

function applyAnimation() {
  cards.forEach((card) => {
    const animationDirection = getAnimationDirection(card);
    if (isInView(card)) {
      card.classList.add(animations[animationDirection]);
    } else {
      card.classList.remove(animations[animationDirection]);
    }
  });
}

function getAnimationDirection(element) {
  if (element.classList.contains("left")) {
    return 0; // fade-left
  } else if (element.classList.contains("right")) {
    return 1; // fade-right
  } else if (element.classList.contains("top")) {
    return 2; // fade-top
  } else if (element.classList.contains("bottom")) {
    return 3; // fade-bottom
  }
}

function throttle(callback, delay) {
  let isThrottled = false;
  return function () {
    if (!isThrottled) {
      callback.apply(this, arguments);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

const throttledApplyAnimation = throttle(applyAnimation, 200);
window.addEventListener("scroll", throttledApplyAnimation);
window.addEventListener("resize", throttledApplyAnimation);
