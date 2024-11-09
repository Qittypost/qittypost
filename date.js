const date = document.querySelector('[type="date"]');
const time = document.querySelector('[type="time"]');
const submit = document.getElementById('submit');

const date_inp = document.getElementById('date');
const time_inp = document.getElementById('time');

const urlParams = new URLSearchParams(window.location.search);
const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();
tg.disableVerticalSwipes();

let d = urlParams.get('date');
let t = urlParams.get('time');

const today = new Date();

date.value = date_inp.value = d ? d : `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`; 
time.value = time_inp.value = t ? t : `${today.getHours()}:${today.getMinutes()}`;


date_inp.addEventListener('click', (e) => {
    date.style.top = `${e.clientY}px`;
    date.style.left = `${e.clientX}px`;
    setTimeout(() => date.showPicker());
});

date.addEventListener('change', () => {
    date_inp.value = date.value;
});

time_inp.addEventListener('click', (e) => {
    time.style.top = `${e.clientY}px`;
    time.style.left = `${e.clientX}px`;
    setTimeout(() => time.showPicker());
});

time.addEventListener('change', () => {
    time_inp.value = time.value;
});

submit.addEventListener('click', () => {
    fetch(`http://localhost:8000/send_date?user_id=${encodeURIComponent(tg.initDataUnsafe.query_id)}&date=${date_inp.value}&time=${time_inp.value}`,
     {method: 'POST'});
});
