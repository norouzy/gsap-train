const imgs = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
let index = 0;
// imgs.forEach((img, index) => {
// // document.addEventListener("");
// });
console.log(imgs);
gsap.to(imgs[0], {
  x: 0,
  duration: 0,
});
tl = gsap.timeline();
nextBtn.addEventListener("click", () => {
  index++;
  if (index < imgs.length) {
    console.log(index);
    console.log(imgs.length);
    tl.to(imgs[index], {
      x: 0,
      duration: 1,
      onComplete: function () {
        if (index !== 0) {
          gsap.set(imgs[index - 1], { clearProps: "x" });
        } else {
          gsap.set(imgs[imgs.length - 1], { clearProps: "x" });
        }
      },
    });
  } else {
    index = 0;
    gsap.set(imgs[imgs.length - 1], { clearProps: "x" });
    tl.to(imgs[index], {
      x: 0,
      duration: 1,
    });
  }
});
