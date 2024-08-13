const $menu = document.querySelector('.menu');
const $openMenuBtn = document.querySelector('.header__button');
const $closeMenuBtn = document.querySelector('.menu__button');

$openMenuBtn.addEventListener('click', () => {
    $menu.classList.toggle('menu__open');
})

console.log($closeMenuBtn);

$closeMenuBtn.addEventListener('click', () => {
    $menu.classList.toggle('menu__open');
})