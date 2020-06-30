'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');
let result = getRandomNumber(100);

function getRandomNumber(100) {
  return Math.ceil(Math.random() * 100);
}

function updateNumber() {
  let numberValue = number.value;
  number.innerHTML = numberValue;
  console.log(numberValue);
}

button.addEventListener('click', updateNumber);
