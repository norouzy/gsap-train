const p = document.querySelectorAll(".vertical-slider p");

tl = gsap.timeline({ repeat: -1 });
tl.from(p, { autoAlpha: 0, y: 100, duration: 1, stagger: 1 }).to(
  p,
  {
    autoAlpha: 0,
    y: -100,
    duration: 1,
    stagger: 1,
  },
  0.75
);
