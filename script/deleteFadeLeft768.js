document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('[data-aos="fade-left"]').forEach((el) => {
            el.removeAttribute("data-aos");
        });
    }
});