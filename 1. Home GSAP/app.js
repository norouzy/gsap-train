const h1 = document.querySelector(".home-content h1");
const nav = document.querySelectorAll(".container-nav a");
const line = document.querySelector(".middle-line");
const grape = document.querySelector(".home-content img");
const homeBtn = document.querySelector(".home-content button");
const logos = document.querySelectorAll("nav img");
console.log(line);
tl = gsap.timeline();
tl.from(h1, { autoAlpha: 0, y: -50, delay: 0.2 })
  .to(line, { height: 200 }, "-=0.2")
  .from(grape, { autoAlpha: 0, y: -50 }, "-=0.2")
  .from(homeBtn, { autoAlpha: 0, y: -50 }, "-=0.2")
  .from(nav, { autoAlpha: 0, stagger: 0.2, y: -50 })
  .from(logos, { autoAlpha: 0, y: -50 });
