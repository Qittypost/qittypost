const header = document.querySelector('header');
const menu = header.querySelector('p');

let isexpanded = false;

menu.addEventListener('click', () => {
    if (isexpanded) {
        header.style.height = '90px';
        isexpanded = false;
    } else {
        header.style.height = '100%';
        isexpanded = true;
    }
});
