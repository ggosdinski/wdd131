const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const title = document.querySelector("h1");

// Mostrar menú al hacer clic en el botón de hamburguesa
open.addEventListener("click", () => {
    nav.classList.add("visible");
    open.style.display = "none"; // Oculta el botón de hamburguesa
    close.style.display = "block"; // Muestra el botón de cerrar (X)
    title.style.display = "none"; // Oculta el título
});

// Cerrar menú al hacer clic en el botón de cerrar (X)
close.addEventListener("click", () => {
    nav.classList.remove("visible");
    close.style.display = "none"; // Oculta el botón de cerrar (X)
    open.style.display = "block"; // Muestra el botón de hamburguesa
    title.style.display = "block"; // Muestra el título
});

// Detectar cambios de tamaño de ventana
window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
        // Si estamos en pantallas grandes, oculta el botón open y close
        open.style.display = "none";
        close.style.display = "none"; 
        title.style.display = "block"; // Muestra el título
        nav.classList.remove("visible");  // Cierra el menú si está abierto
    } else {
        // Si estamos en pantallas pequeñas, muestra el botón de hamburguesa
        open.style.display = "block";
        // Aseguramos que el título se mantenga visible
        title.style.display = "block";
    }
});
