document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        let target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "instant", block: "start" });
                document.body.style.visibility = "visible"; // Mostrar el contenido después del scroll
            }, 100);
        }
    } else {
        document.body.style.visibility = "visible"; // Si no hay hash, mostrar directamente
    }
});