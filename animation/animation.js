// const cards = document.querySelectorAll(".animate");
// const animations = ["fade-left", "fade-right", "fade-top", "fade-bottom"];
// const animationPoint = 50;

// function isInView(element) {
//   const elementTop = element.getBoundingClientRect().top;
//   const elementBottom = element.getBoundingClientRect().bottom;
//   return (
//     elementTop <= window.innerHeight - animationPoint && elementBottom >= 0
//   );
// }

// function applyAnimation() {
//   cards.forEach((card) => {
//     const animationDirection = getAnimationDirection(card);
//     if (isInView(card)) {
//       card.classList.add(animations[animationDirection]);
//     } else {
//       card.classList.remove(animations[animationDirection]);
//     }
//   });
// }

// function getAnimationDirection(element) {
//   if (element.classList.contains("left")) {
//     return 0; // fade-left
//   } else if (element.classList.contains("right")) {
//     return 1; // fade-right
//   } else if (element.classList.contains("top")) {
//     return 2; // fade-top
//   } else if (element.classList.contains("bottom")) {
//     return 3; // fade-bottom
//   }
// }

// function throttle(callback, delay) {
//   let isThrottled = false;
//   return function () {
//     if (!isThrottled) {
//       callback.apply(this, arguments);
//       isThrottled = true;
//       setTimeout(() => {
//         isThrottled = false;
//       }, delay);
//     }
//   };
// }

// const throttledApplyAnimation = throttle(applyAnimation, 200); // Adjust delay as needed
// window.addEventListener("scroll", throttledApplyAnimation);
// window.addEventListener("resize", throttledApplyAnimation);
// const cards = document.querySelectorAll(".animate");
// const animations = ["fade-left", "fade-right", "fade-top", "fade-bottom"];
// const animationPoint = 50;

// function isInView(element) {
//   const elementTop = element.getBoundingClientRect().top;
//   const elementBottom = element.getBoundingClientRect().bottom;
//   return (
//     elementTop <= window.innerHeight - animationPoint && elementBottom >= 0
//   );
// }

// function applyAnimation() {
//   cards.forEach((card) => {
//     const animationDirection = getAnimationDirection(card);
//     if (isInView(card)) {
//       card.classList.add(animations[animationDirection]);
//     } else {
//       card.classList.remove(animations[animationDirection]);
//     }
//   });
// }

// function getAnimationDirection(element) {
//   if (element.classList.contains("left")) {
//     return 0; // fade-left
//   } else if (element.classList.contains("right")) {
//     return 1; // fade-right
//   } else if (element.classList.contains("top")) {
//     return 2; // fade-top
//   } else if (element.classList.contains("bottom")) {
//     return 3; // fade-bottom
//   }
// }

// function scrollHandler() {
//   applyAnimation();
// }

// window.addEventListener("scroll", scrollHandler);
// window.addEventListener("resize", scrollHandler);

const cards = document.querySelectorAll(".animate");
const animations = ["fade-left", "fade-right", "fade-top", "fade-bottom"];
const animationPoint = 100; // Adjust this value to control the animation trigger point

function isInView(element) {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return (
    elementTop <= window.innerHeight - animationPoint && elementBottom >= 0
  );
}

function applyAnimation() {
  cards.forEach((card, index) => {
    const animationDirection = getAnimationDirection(card);
    if (isInView(card)) {
      card.classList.add("animate", animations[animationDirection]);
      card.style.animationDelay = `${index * 0.2}s`; // Add a slight delay between each animation
    } else {
      card.classList.remove("animate", animations[animationDirection]);
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

function scrollHandler() {
  applyAnimation();
}

window.addEventListener("scroll", scrollHandler);
window.addEventListener("resize", scrollHandler);
