'use strict';
const closecommand = 'отмена';
let myrandom = -1;
let array = [];
let reqtotalattempt = -1;
let counter = 0;
function GameBegin() {
  const totaleuro = prompt('Какой число загадываете (чтобы закончить игру используете слова "Отмена" ) ?', '');

  if (totaleuro.toLowerCase() === closecommand) {
    console.log('Игра финиш!');
    alert('Игра финиш');
    return; // чтобы выход из recırsıve
  } else if (!(/^\d+$/.test(totaleuro))) {
    console.log('Введите число!');
    alert('Введите число!');
  } else {
    if (reqtotalattempt === counter) {
      console.log('Вы исчерпали все шансы !');
      alert('Вы исчерпали все шансы !');
      myrandom = -1;
      counter = 0;
      return; // чтобы выход из recırsıve
    }

    if (!array.includes(Number(totaleuro))) {
      array.push(Number(totaleuro));
      if (Number(totaleuro) > myrandom) {
        counter += 1;
        console.log('Меньше!');
        alert('Меньше!');
      } else if (Number(totaleuro) < myrandom) {
        counter += 1;
        console.log('Больше!');
        alert('Больше!');
      } else {
        myrandom = -1;
        console.log('Правильно!');
        alert('Правильно!');
        counter = 0;
        return; // чтобы выход из recırsıve
      }
    } else {
      console.log('Это число вы уже вводили!');
      alert('Это число вы уже вводили!');
    }
    GameBegin(); // себя вызоваем чтобы продолжать
  }
}


let m = Number(prompt('Начинаем Первый интервал  ?', ''));
console.log('Первый интервал  ?: ', m);

let n = Number(prompt('Начинаем Второй интервал  ?', ''));
console.log('Второй интервал  ?: ', n);

if (m > n) {
  const temp = m;

  m = n;

  n = temp;
}

counter = 0;

if (50 <= m && n <= 100) {
  reqtotalattempt = 15;
} else {
  reqtotalattempt = Math.round((n - m) * 0.3);
}

console.log(' Всего шанс ' + reqtotalattempt);
alert(' Всего шанс ' + reqtotalattempt);
array = [];

myrandom = Math.floor((Math.random() * (n - m) + m) + 1); // cлучайное число в этом диапазоне между m и n
console.log(' Загадка число ' + myrandom);
alert(' Загадка число ' + myrandom);
GameBegin();


