const imgs = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const sliderContainer = document.querySelector(".slider-container");
const indexIndication = document.querySelector(".counter span:nth-child(1)");
let index = 0;

gsap.to(imgs[0], {
  x: 0,
  duration: 0,
});

function action(dir, valueX) {
  const tl = gsap.timeline();
  indexText = index;
  if (dir == "next") {
    indexText = index + 1;
  }
  if (0 < index && index < imgs.length) {
    tl.set(indexIndication, { innerText: indexText }).to(imgs[index], {
      x: valueX,
      duration: 0.6,
    });
  } else {
    if (dir == "next") {
      index--;
    } else {
      index++;
    }
    const vibrayX = 4;
    tl.to(sliderContainer, {
      duration: 0.5,
      keyframes: [
        { x: vibrayX },
        { x: -1 * vibrayX },
        { x: vibrayX },
        { x: -1 * vibrayX },
        { x: 0 },
      ],
    });
  }
}

nextBtn.addEventListener("click", () => {
  index++;
  action("next", 0);
});

prevBtn.addEventListener("click", () => {
  action("prev", "-100%");
  index--;
});
