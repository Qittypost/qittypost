const header = document.querySelector('header');
const menu = header.querySelector('p');

let isexpanded = false;

try {
    const tg = window.Telegram.WebApp;
    if (tg) {
        tg.ready();
        tg.disableVerticalSwipes();
        tg.expand();
    } else {
        console.log('Tg web app api is\'n initialized');
    }
} catch(e) {
    console.log('Error', e);
}

menu.addEventListener('click', () => {
    if (isexpanded) {
        header.style.height = '90px';
        isexpanded = false;
    } else {
        header.style.height = '100%';
        isexpanded = true;
    }
});
