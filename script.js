// alert('Этот сайт про глину!')
// let count = 0;
// let schet = document.querySelector('#counter');
// let vopros1 = document.querySelector('#squareText1');
// let vopros2 = document.querySelector('#squareText2');
// let vopros3 = document.querySelector('#squareText3');
// schet.textContent = count;
// count.textContent = count + 1

// vopros2.onclick = function() {
//     count = count + 1;
//     schet.textContent = count;  
//     vopros2.onclick = null;
// };

// let vopros22 = 'squareText2'

// vopros22.onclick = function() {
//     count = count + 1;
//     schet.textContent = count;  
//     vopros22.onclick = null;
// };

let count = 0;
let schet = document.querySelector('#counter');

// Находим все кнопки
let v1 = document.querySelector('#squareText1');
let v2 = document.querySelector('#squareText2');
let v3 = document.querySelector('#squareText3');

schet.textContent = count;

// Функция, которую мы назначим всем кнопкам
function clickHandler() {
    count = count + 1;
    schet.textContent = count;
    this.onclick = null; // "this" — это та кнопка, на которую нажали
}

// Назначаем функцию каждой кнопке
v1.onclick = clickHandler;
v2.onclick = clickHandler;
v3.onclick = clickHandler;

// vopros1.onclick = function() {

//     this.textContent = 'f'; 
// };
