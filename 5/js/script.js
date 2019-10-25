let fon = document.getElementsByTagName('body'),
    item = document.querySelector('.menu .menu-item'),
    items = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu'),
    newItem = document.createElement('item'),
    column = document.querySelectorAll('.column'),
    div = document.createElement('li'),
    adv = document.getElementsByTagName('div');
    title = document.getElementById('title'),
    prompt = document.getElementById('prompt'),
    answer = {
        incom: []
    };

    

fon[0].style.backgroundImage = "url('img/apple_true.jpg')";
console.log(fon[0]);
console.log(items);
console.log(item);
console.log(newItem);
console.log(column[1]);
console.log(div);
console.log(title);



menu.insertBefore(items[2], items[1]);
menu.appendChild(div);
column[1].removeChild(adv[3]);
title.textContent = 'Мы продаем только подлинную технику Apple';
div.textContent = 'Пятый пункт';
div.classList
console.log(div);

// answer.incom.push(prompt("Что вы думаете об технике Apple?"));






