// Aqui va el codigo del header.js el que le esto es alto kbro homosexualizado
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 60)
});