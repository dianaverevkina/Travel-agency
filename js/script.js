//Открыть/закрыть меню-бургер
let icon = document.querySelectorAll('.icon');
let menu__items = document.querySelector('.menu__items');
let back = document.querySelector('body');

icon.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      menu__items.classList.toggle('active');
      back.classList.toggle('lock');
   }
});

//Подключение слайдера

let swiper = new Swiper('.slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   keybord: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },

   loop: true,
   speed: 700,

   breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 200,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
   },
})