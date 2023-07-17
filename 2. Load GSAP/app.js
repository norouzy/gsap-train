const imagesContainer = document.querySelector(".images-container");
const flip = document.querySelector(".flip");
const textDiv = document.querySelector(".bloc-txt");
const text = document.querySelector(".bloc-txt h2");

window.addEventListener("load", loader);

function loader() {
  tl = gsap.timeline({
    default: {
      ease: "power2",
    },
  });
  tl.to(imagesContainer, { duration: 1.3, height: 400, delay: 0.4 })
    .to(textDiv, { height: "auto", duration: 0.6 }, "-=0.8")
    .to(text, { y: 0 }, "-=0.6")
    .to(".f2", { y: 0, duration: 0.6 })
    .to(".flip-img1", { display: "none", duration: 0 })
    .to(".f2", { y: "-100%" })
    .to(".load-container", { autoAlpha: 0, duration: 0.8, delay: 1 })
    .add(() => document.querySelector("video").play(), "-=1")
    .add(() => {
      document.querySelector(".load-container").style.display = "none";
    });
}
