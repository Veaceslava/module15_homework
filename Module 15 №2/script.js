/*Модуль 15. API браузера 

Задание №2*/



let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  
  alert( 'Высота с учётом прокрутки: ' + scrollHeight );