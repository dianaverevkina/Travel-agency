let icon = document.querySelectorAll('.icon');
let menu__items = document.querySelector('.menu__items');
let back = document.querySelector('body');
let html = document.querySelector('html');

icon.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      menu__items.classList.toggle('active');
      back.classList.toggle('lock');
      html.classList.toggle('lock');
   }
});