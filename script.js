// alert('Этот сайт про глину!')
let count = 0;
let schet = document.querySelector('#counter');
let quest = document.querySelector('#ques');
let v1 = document.querySelector('#squareText1');
let v2 = document.querySelector('#squareText2');
let v3 = document.querySelector('#squareText3');



// --- ВОПРОС 1 ---
function step1() {
    quest.innerText = 'Из чего состоит глина?';
    v1.innerText = 'Вода';
    v2.innerText = 'Ил'; // Правильный
    v3.innerText = 'Цемент';

    v2.onclick = function() { count++; update(step2); }; // При верном +1 и переход
    v1.onclick = function() { update(step2); };          // При неверном просто переход
    v3.onclick = function() { update(step2); };
}

// --- ВОПРОС 2 ---
function step2() {
    quest.innerText = 'Что чаще делают из каолина?';
    v1.innerText = 'Кирпичи';
    v2.innerText = 'Черепица';
    v3.innerText = 'Фарфор'; // Правильный

    v3.onclick = function() { count++; update(step3); };
    v1.onclick = function() { update(step3); };
    v2.onclick = function() { update(step3); };
}

// --- ВОПРОС 3 ---
function step3() {
    quest.innerText = 'Где находится одно из крупнейших в России месторождений белой глины?';
    v1.innerText = 'Оренбургская область'; // Правильный
    v2.innerText = 'Сибирь';
    v3.innerText = 'Кавказ';

    v1.onclick = function() { count++; update(step4); };
    v2.onclick = function() { update(step4); };
    v3.onclick = function() { update(step4); };
}

// --- ВОПРОС 4 ---
function step4() {
    quest.innerText = 'Какая глина подходит для мелких фигурок,изделий или украшений?';
    v1.innerText = 'Природная глина'; 
    v2.innerText = 'Самозатвердевающая глина';
    v3.innerText = 'Полимерная'; // Правильный

    v1.onclick = function() { update(step5); };
    v2.onclick = function() { update(step5); };
    v3.onclick = function() { count++; update(step5); };
}

// --- ВОПРОС 5 ---
function step5() {
    quest.innerText = 'Как называется клей для глины?';
    v1.innerText = 'Клей'; 
    v2.innerText = 'Глинник';
    v3.innerText = 'Шликер'; // Правильный

    v1.onclick = function() { update(step6); };
    v2.onclick = function() { update(step6); };
    v3.onclick = function() { count++; update(step6); };
}

// --- ВОПРОС 6 ---
function step6() {
    quest.innerText = 'Как называется клей для глины?';
    v1.innerText = 'Клей'; 
    v2.innerText = 'Глинник';
    v3.innerText = 'Шликер'; // Правильный

    v1.onclick = function() { update(step7); };
    v2.onclick = function() { update(step7); };
    v3.onclick = function() { count++; update(step7); };
}

// --- ВОПРОС 7 ---
function step7() {
    quest.innerText = 'В каком из предметов в составе есть глина?';
    v1.innerText = 'Пластик'; 
    v2.innerText = 'Бумага'; // Правильный
    v3.innerText = 'Ткань'; 

    v1.onclick = function() { update(step8); };
    v2.onclick = function() { count++; update(step8); };
    v3.onclick = function() { update(step8); };
}

// --- ВОПРОС 8 ---
function step8() {
    quest.innerText = 'Как называется когда люди едят глину?';
    v1.innerText = 'Так и называется "Поедание глины"'; 
    v2.innerText = 'Глиноедие';
    v3.innerText = 'Геофагия'; // Правильный

    v1.onclick = function() { update(step9); };
    v2.onclick = function() { update(step9); };
    v3.onclick = function() { count++; update(step9); };
}

// --- ВОПРОС 9 ---
function step9() {
    quest.innerText = 'Выбери правильное определение понятию "Тощая глина"';
    v1.innerText = 'Много песка или ила'; // Правильный
    v2.innerText = 'Липкая, почти без песка';
    v3.innerText = 'Много песка, но мало ила'; 

    v1.onclick = function() { count++; update(step10); };
    v2.onclick = function() { update(step10); };
    v3.onclick = function() { update(step10); };
}

// --- ВОПРОС 10 ---
function step10() {
    quest.innerText = 'Умеет ли глина впитывать радиацию?';
    v1.innerText = 'Да, умеет'; // Правильный
    v2.innerText = 'Нет, не умеет';
    v3.innerText = 'Нет, она умеет впитывать только тяжелые металлы'; 
    v1.onclick = function() { count++; update(step11); };
    v2.onclick = function() { update(step11); };
    v3.onclick = function() { update(step11); };
}

// --- ВОПРОС 11 ---
function step11() {
    quest.innerText = 'Умеет ли глина впитывать радиацию?';
    v1.innerText = 'Да, умеет'; 
    v2.innerText = 'Нет, не умеет'; // Правильный
    v3.innerText = 'Нет, она умеет впитывать только тяжелые металлы'; 
    v1.onclick = function() { update(finish); };
    v2.onclick = function() { count++; update(finish); };
    v3.onclick = function() { update(finish); };
}

// Финал
function finish() {
    quest.innerText = finalText;
    v1.innerText = ''; v2.innerText = ''; v3.innerText = '';
    v1.onclick = v2.onclick = v3.onclick = null;
}

if (finalText => 2) {
    
}
// Вспомогательная функция — только обновляет счет и переходит дальше
function update(nextStep) {
    schet.textContent = count; 
    nextStep(); 
}

// Финал — запускается только в самом конце
function finish() {
    let finalMsg = 'Тест пройден! Твой счет: ' + count + '/11'; 
    quest.innerText = finalMsg;
    v1.innerText = ''; 
    v2.innerText = ''; 
    v3.innerText = '';
    v1.onclick = v2.onclick = v3.onclick = null;

if (count >= 11) {
    quest.innerText += " - Да ты профи! Просто идеально! Молодец!";
} 
else if (count >= 10) {
    quest.innerText += " - Почти, но не до конца! Ты все равно супер!";
}
else if (count >= 9) {
    quest.innerText += " - Почти, но не идеально :(, но результат классный!";
}
else if (count >= 8) {
    quest.innerText += " - Хорошо! Но надо еще повторить";
} 
else if (count >= 7) {
    quest.innerText += " - Ты уже что то, но знаешь!";
} 
else if (count >= 5) {
    quest.innerText += " - Надо еще повторять и повторять!";
} 
else if (count >= 3) {
    quest.innerText += " - Почти плохо...";
} 
else if (count >= 2) {
    quest.innerText += " - А ты точно читал?";
} 
else if (count >= 1) {
    quest.innerText += " - Пффффффффффф...";
} 
else {
    quest.innerText += " - Я промолчу";
}
}

// Запуск игры
step1();
