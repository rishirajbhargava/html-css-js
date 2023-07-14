gsap.to(".circle", 
{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2,
})

gsap.to('#one', {
    width: '100%', 
    ease: Expo.easeInOut, 
    duration: 2
})

var active = 4;
let activeText= 4;

let mnCircles = document.querySelectorAll(".dots");
let sec = document.querySelectorAll(".stripe");
let resetBtn = document.querySelector(".btn");
let text = document.querySelector(".text");



gsap.to(mnCircles[active-1],{
    opacity:.5,
});


sec.forEach((section, index) => {
  if( index==0 || index>=sec.length-1) return;

    section.addEventListener("click", () => {
      
        gsap.to('.circle', {
            rotate: 10 * (4-(index)),
            ease: Expo.easeInOut,
            duration: 1,
        })
        gsap.to(`.text${activeText}`, {
            top:'110%',
            ease: Expo.easeInOut,
            duration: 1,
        })
        activeText = index;

        gsap.to(`.text${index}`, {
            top:0,
            ease: Expo.easeInOut,
            duration: 1,
        })

        greyout();
        
        gsap.to( mnCircles[index-1] ,{
            ease: Expo.easeInOut,
            duration: 1,
            opacity: .5,
        })
        gsap.to(sec[index], {
            ease: Expo.easeInOut,
            duration: 1,
            opacity: 1,
        })
    })



});




mnCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      
        gsap.to('.circle', {
            rotate: 10 * (4-(index+1)),
            ease: Expo.easeInOut,
            duration: 1,
        })
        gsap.to(`.text${activeText}`, {
            top:'110%',
            ease: Expo.easeInOut,
            duration: 1,
        })
        activeText = index+1;

        gsap.to(`.text${index+1}`, {
            top:0,
            ease: Expo.easeInOut,
            duration: 1,
        })

        greyout();
        
        gsap.to(circle, {
            ease: Expo.easeInOut,
            duration: 1,
            opacity: .5,
        })
        gsap.to(sec[index+1], {
            ease: Expo.easeInOut,
            duration: 1,
            opacity: 1,
        })
    })


});

gsap.to('.logo',{
    rotate:  360,
    ease: Expo.easeInOut,
    duration: 2,
})

gsap.to('.logo-h2',{
    width: '100px',
    duration: 2,
    ease: Expo.easeInOut,
    
})

function greyout(){
    gsap.to(mnCircles, {
        opacity: .1,
        ease: Expo.easeInOut,
        duration: 1,
    })

    gsap.to(sec, {
        opacity: .40,
        ease: Expo.easeInOut,
        duration: 1,

    })

    
}




gsap.to(sec[active],{
    opacity:0.9,
})


gsap.to(`.text${activeText}`, {
    top:0,
    ease: Expo.easeInOut,
    duration: 2,
   
})
 let dots = document.querySelectorAll(".dots");
 

 dots.forEach((dot, index) => {
    gsap.to(dot, {
        top:`${index*30}px`,
        ease: Expo.easeInOut,
        duration: 2,
        delay: index*.1
    })
 });