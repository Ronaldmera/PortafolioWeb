AOS.init();

document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.querySelector(".hamburguer");
    const menu = document.querySelector(".nav-links");

    function toggleMenu() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            setTimeout(() => {
                menu.style.display = "none";
            }, 300);
        } else {
            menu.style.display = "flex";
            setTimeout(() => {
                menu.classList.add("active");
            }, 10);
        }
    }

    hamburguer.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth < 768) { // Solo oculta el menú en móviles
            if (!menu.contains(event.target) && !hamburguer.contains(event.target)) {
                menu.classList.remove("active");
                setTimeout(() => {
                    menu.style.display = "none";
                }, 300);
            }
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            menu.style.removeProperty("display");
            menu.classList.remove("active");
        } else if (!menu.classList.contains("active")) {
            menu.style.display = "none";
        }
    });
});
