const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function videoAnimation(){
    var videocon = document.querySelector(".video-container")
var playbtn = document.querySelector(".play")

videocon.addEventListener("mouseenter" , function(){
   gsap.to(playbtn,{
    scale : 1,
    opacity : 1
   })
})

videocon.addEventListener("mouseleave" , function(){
   gsap.to(playbtn,{
    scale : 0,
    opacity : 0
   })
})

videocon.addEventListener("mousemove" , function(dets){
   gsap.to(playbtn,{
    left : dets.x,
    top : dets.y
   })
})
}
videoAnimation();

function loadingAnimation(){
    gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
}
loadingAnimation();

function cursorMovement(){
    document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  });
});

document.addEventListener("mousemove", function (e) {
  gsap.to("#cursor", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out"
  });
});
}
cursorMovement();

window.addEventListener("load", () => {
  scroll.update();
});

function navMenu() {
  let nav = document.querySelector(".menu-effect");
  let menuIcon = document.querySelector(".ri-menu-line");
  let closeIcon = document.querySelector(".ri-close-large-line");

  menuIcon.addEventListener("click", function () {
    nav.classList.add("active");  // slide in
  });

  closeIcon.addEventListener("click", function () {
    nav.classList.remove("active"); // slide out
  });
}
navMenu();