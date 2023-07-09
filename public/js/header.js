let menu = document.querySelector('#menu-icon');
let headerBttns = document.querySelector('.header-bttns');

menu.onclick = () => {
    headerBttns.classList.toggle('open');
    menu.classList.toggle('menu-background');
};

const activePage = window.location.pathname;
const headerLinks = document.querySelectorAll('.header-bttns a').forEach(link => {
    const linkPathname = new URL(link.href).pathname;

    if(linkPathname === activePage){
        link.classList.add("active");
        };
});