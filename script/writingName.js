document.addEventListener("DOMContentLoaded", function () {
    const mensaje = "¡Hola, soy Ronald Mera!";
    const elemento = document.getElementById("name");
    let i = 0;

    function escribirTexto() {
        if (i < mensaje.length) {
            elemento.textContent += mensaje[i];
            i++;
            setTimeout(escribirTexto, 90); // Velocidad de escritura 
        }
    }

    escribirTexto();
});