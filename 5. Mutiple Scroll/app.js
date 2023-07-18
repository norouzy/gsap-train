const title = document.querySelector(".home-mountains h1");
const mountain = document.querySelector(".home-mountains img");

gsap.to(title, {
  y: 500,
  scrollTrigger: {
    trigger: "home-mountains",
    scrub: true,
  },
});

gsap.to(mountain, {
  y: 100,
  scrollTrigger: {
    trigger: "home-mountains",
    scrub: true,
  },
});
