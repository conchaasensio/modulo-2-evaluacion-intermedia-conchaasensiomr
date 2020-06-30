'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');
let result = getRandomNumber(100);
let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
console.log(getRandomNumber());

function updateNumber() {
  let numberValue = number.value;
  number.innerHTML = numberValue;
  console.log(numberValue);
}

button.addEventListener('click', updateNumber);
