let btn = document.querySelector('#btn-color');
let ico = document.querySelector('#img');

// Determinar si estamos en una subcarpeta (como projects.html)
let basePath = window.location.pathname.includes("projects.html") ? "../" : "";

// Aplicar modo oscuro si estaba guardado
function aplicarModoOscuro() {
    let modoOscuroActivo = localStorage.getItem('modoOscuro') === 'true';

    if (modoOscuroActivo) {
        document.documentElement.classList.add("dark-mode");
        ico.setAttribute('src', basePath + "img/header/light_mode.svg"); 
    } else {
        document.documentElement.classList.remove("dark-mode");
        ico.setAttribute('src', basePath + "img/header/dark_mode.svg"); 
    }
}

// Llamar a la función al cargar la página
aplicarModoOscuro();

btn.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark-mode");

    let modoOscuroActivo = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem('modoOscuro', modoOscuroActivo);

    // Cambiar el icono correctamente al hacer clic
    if (modoOscuroActivo) {
        ico.setAttribute('src', basePath + "img/header/light_mode.svg"); 
    } else {
        ico.setAttribute('src', basePath + "img/header/dark_mode.svg"); 
    }
});
