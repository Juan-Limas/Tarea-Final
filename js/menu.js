const botonMenu = document.getElementById("botonMenu");
const menuLateral = document.querySelector(".menu-lateral");

function cerrarMenu() {
    menuLateral.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
}

botonMenu.addEventListener("click", function () {
    const abierto = menuLateral.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", String(abierto));
});

// Cerrar al seleccionar una opción
document.querySelectorAll(".lista-lateral a").forEach(enlace => {
    enlace.addEventListener("click", cerrarMenu);
});

// Cerrar al presionar Escape
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarMenu();
    }
});
