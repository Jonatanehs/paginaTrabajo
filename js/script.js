document.addEventListener("DOMContentLoaded", function() {
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    console.log("funciona")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
});
