const swiper = null;
function t() {
    swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: screen.width / 220 ,
        loop: true,
    });
};
t();