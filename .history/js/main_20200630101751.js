'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');
const clue = document.querySelector('.js-clue');
let attemps = document.querySelector('.js-attepms');
let randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

function compareNumber(ev) {
  ev.preventDefault();
  let numberValue = number.value;
  //number.innerHTML = numberValue;
  console.log(numberValue);
  attemps++;
  if (numberValue > randomNumber && numberValue < 100) {
    clue.innerHTML = 'Demasiado alto';
  } else if (numberValue < randomNumber) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (numberValue === randomNumber) {
    clue.innerHTML = '¡¡¡Has ganado, Campeona!!!';
  } else if (numberValue > 100) {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }
}

button.addEventListener('click', compareNumber);
