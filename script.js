const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener('load', () => {
  scroll.update(); // initial update 
});
window.addEventListener('resize', () => {
  scroll.update();
});
var fix = document.querySelector(".fix")
var elemc = document.querySelector(".elemc")

elemc.addEventListener("mouseenter",function(){
    fix.style.display = "block";
})
elemc.addEventListener("mouseleave",function(){
    fix.style.display = "none"
})

var elema = document.querySelectorAll(".elem");
elema.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
           var img = elem.getAttribute("data");
        fix.style.backgroundImage = `url(${img})`;
       })
            
});


var dets = document.querySelectorAll(".head h1");


const rest = () => dets.forEach(function(e){
    e.style.color = "#504A45"
})
const resize = () => dets.forEach(function(e){
    e.style.left = "8%"
})

var des =  document.querySelector(".design");
des.style.color = "white";
des.style.left = "2%";

 var img = document.querySelector(".img");
 var p  =document.querySelector(".para p")
dets.forEach(function(hi){
    hi.addEventListener("click",function(){
         rest();
         resize()
        var pic =  hi.getAttribute("pic");
        var para = hi.getAttribute("para")
        img.innerHTML =`<img src="${pic}" alt=""></img>`;
        p.innerText = para;
        hi.style.color = "white";
        hi.style.left = "2%"
        console.log("hello");
        
    })
})


//  var swiper = new Swiper(".mySwiper", {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: 6,
//     });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,           // optional
  centeredSlidesBounds: true,     // fix the gap
  spaceBetween: 6,
  loop: false,
});

var load = document.querySelector(".loader")
setTimeout(() => {
    load.style.top = "-100%";
}, 4000);











// var btn = document.querySelector(".neu")
// var pook = document.querySelector(".pook")
// var flag = 0;
// btn.addEventListener("click",function(){
//     console.log("hi");
    
//     if(flag == 0){ 
//     pook.style.top = "0";
//     flag++;
//     } 
//     else{
//       pook.style.top = "-100%";
//       flag--;
//     }
// })


