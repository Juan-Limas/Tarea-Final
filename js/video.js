document.addEventListener("DOMContentLoaded", function () {

    const modalMision = document.getElementById("modalMision");
    const videoMision = document.getElementById("videoMision");

    if (modalMision && videoMision) {

        // Detener el video apenas comienza a cerrarse
        modalMision.addEventListener("hide.bs.modal", function () {
            videoMision.pause();
            videoMision.currentTime = 0;
        });
    }
});