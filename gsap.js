gsap.to(".inicio_prudente", {
    scrollTrigger:{
        trigger: ".inicio_prudente",
        start: "top top",
        end: "130% 0",
        pin: true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".imagem_inicio", {
    scrollTrigger:{
        trigger: ".imagem_inicio",
        start: "-30% top",
        end: "130% 0",
        scrub: 2,
        markers:true,
    },
    height:"70%",
    opacity:0.4,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".titulo_inicio", {
    scrollTrigger:{
        trigger: ".titulo_inicio",
        start: "-30% top",
        end: "330% 0",
        scrub: 2,
        markers:true,
    },
    height:"157",
    opacity:0.4,
    ease:"none",
    smooth: true,
    duration: 0.3
});


gsap.to(".imagem_testos1", {
    scrollTrigger:{
        trigger: ".imagem_testos1",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
    ease:"none",
    backgroundPosition: "50% 100%",
    smooth: true,
    duration: 0.3
});
gsap.to(".imagem_testos1", {
    scrollTrigger:{
        trigger: ".imagem_testos1",
        start: "top 80%",
        end: "top 80%",
        scrub: 2,
        markers:true,
    },
    opacity:1,
    marginTop: "20px",
    smooth: true,
    ease:"none",
    duration: 0.2
});

const buttons = gsap.utils.toArray('.btn');
buttons.forEach((btn) => {
  gsap.from(btn, {
    scrollTrigger: {
      start: 'top 80%',
      end: 'bottom top',
      markers:true,
      trigger: btn,
      onEnter() {
        btn.classList.remove('disable');
      },
      onLeave() {
        btn.classList.add('disable');
      },
      onEnterBack() {
        btn.classList.remove('disable');
      },
      onLeaveBack() {
        btn.classList.add('disable');
      }
    }
  });
});



gsap.to(".imagem_testos2", {
    scrollTrigger:{
        trigger: ".imagem_testos2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
    ease:"none",
    backgroundPosition: "50% 100%",
    smooth: true,
    duration: 0.3
});

gsap.to(".imagem_esta1", {
    scrollTrigger:{
        trigger: ".imagem_esta1",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
    ease:"none",
    backgroundPosition: "50% 100%",
    smooth: true,
    duration: 0.3
});


gsap.to(".imagem_esta2", {
    scrollTrigger:{
        trigger: ".imagem_esta2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
    ease:"none",
    backgroundPosition: "50% 100%",
    smooth: true,
    duration: 0.3
});

