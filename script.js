const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstpageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y:'-10',
        opacity:0,
        duration: 1.5,
       ease: Expo.easeInOut
    })
    .to(".boundinglem", {
       y:0,
       ease:Expo.easeInOut,
       duration:2,
       delay:-1, 
       stagger:.2
    })
    .from("#herofooter", {
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
     })
}


function mouse(){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
mouse();
firstpageAnim(); 


document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove",function(details){
  gsap.to(elem.querySelector("img"),{
    opacity: 1,
    ease: Power1,
  });
    })
});