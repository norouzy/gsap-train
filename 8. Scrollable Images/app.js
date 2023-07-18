ScrollTrigger.create({
  trigger: ".event1",
  // scrub: true,
  pin: ".event1 .pinSection",
  start: "top top",
  end: "bottom top",
  markers: true,
});

ScrollTrigger.create({
  trigger: ".event1",
  // scrub: true,
  pin: ".event2 .pinSection",
  start: "top top",
  end: "bottom top",
  markers: true,
});
