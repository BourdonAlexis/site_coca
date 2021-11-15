//Initialise le slider
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true
});

//Fonction du bouton menu de la navbar (petit écran)
// active la fonction lors du click sur le bouton menu
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
