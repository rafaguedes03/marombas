let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('ul.menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

}
