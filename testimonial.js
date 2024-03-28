let change = document.querySelectorAll(".change");
let index = 0;

setTimeout(() => {
  setInterval(() => {
    change.forEach((box) => {
      box.style.display = "none";
    });

    change[index].style.display = "block";
    index++;

    if (index > 3) {
      index = 0;
    }
  }, 3000);
}, 0);
