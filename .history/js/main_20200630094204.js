'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');
let randomNumber = getRandomNumber(100);
let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(randomNumber);

function updateNumber() {
  let numberValue = number.value;
  number.innerHTML = numberValue;
  console.log(numberValue);
}

button.addEventListener('click', updateNumber);
