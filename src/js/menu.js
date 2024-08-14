const $menu = document.querySelector('.menu');
const $openMenuBtn = document.querySelector('.header__button');
const $closeMenuBtn = document.querySelector('.menu__button');
const $menuOption = document.querySelector('.menu__option');

$openMenuBtn.addEventListener('click', () => {
    $menu.classList.toggle('menu__open');
})

$closeMenuBtn.addEventListener('click', () => {
    $menu.classList.toggle('menu__open');
})

$menuOption.addEventListener('click', () => {
    $menu.classList.toggle('menu__open');
})