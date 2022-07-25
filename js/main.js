const iconMenu = document.getElementById("icon-menu");
const closeIconMenu = document.getElementById("close-icon-menu")
const body = document.querySelector("body");
iconMenu.addEventListener('click', ()=>{
    body.style.overflow = "hidden";
});
closeIconMenu.addEventListener('click', ()=>{
    body.style.overflow = "auto";
});