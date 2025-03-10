document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY; 
    let image = document.querySelector("#welcome img");
    let maxScroll = 890; 

    let opacity = Math.max(1 - scrollPosition / maxScroll, 0);

    image.style.opacity = opacity;
});
