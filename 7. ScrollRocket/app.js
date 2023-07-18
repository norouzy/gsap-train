const blocs = document.querySelectorAll(".bloc");

blocs.forEach((bloc) => {
  gsap.to(bloc, {
    y: 0,
    scrollTrigger: {
      trigger: ".container-scroll",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
});
blocs.forEach((bloc) => {
  ScrollTrigger.create({
    trigger: bloc,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      bloc.classList.add("active");
    },
    onLeaveBack: () => {
      bloc.classList.remove("active");
    },
  });
});
