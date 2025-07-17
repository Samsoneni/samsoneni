// ONSCROLL NAVLINK EFFECT
const links = document.querySelectorAll(".nav li a");
const sections = document.querySelectorAll("section");
window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 70;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute('id');
        }
    });
    links.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');

        }
    })
})

/* CLICK LINK COLOR CHANGE EFFECT */
links.forEach(link=>{
    link.addEventListener('click', ()=>{
        links.forEach(l=> l.classList.remove('active'));
        link.classList.add("active");
    })
})

/*typed animation*/
var typed = new Typed(".typing", {
    strings: ["Designer","Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,

})
const playVoice = document.querySelector('.play');
let speech = window.speechSynthesis;
