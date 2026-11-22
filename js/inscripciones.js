document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modalInscripcion");
    const formulario = document.getElementById("formInscripcion");
    const titulo = document.getElementById("nombreEvento");
    const campoEvento = document.getElementById("eventoSeleccionado");
    const mensaje = document.getElementById("mensajeInscripcion");

    if (!modal || !formulario || !titulo || !campoEvento) {
        return;
    }

    modal.addEventListener("show.bs.modal", function (event) {

        const boton = event.relatedTarget;
        const nombre = boton?.getAttribute("data-evento") || "";

        // Mostrar el nombre del evento seleccionado
        // Limpiar los datos anteriores antes de asignar el evento
        formulario.reset();
        titulo.textContent = nombre;
        campoEvento.value = nombre;

        if (mensaje) {
            mensaje.hidden = true;
        }
    });

    // Mantener el funcionamiento de demostración
    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!formulario.reportValidity()) {
            return;
        }

        if (mensaje) {
            mensaje.textContent =
                "Formulario completado. La inscripción aún no se ha enviado.";
            mensaje.hidden = false;
        }
    });

});