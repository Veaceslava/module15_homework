/*Модуль 15. API браузера 

Задание №1*/


const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    btn.classList.toggle('btn--magic');
});