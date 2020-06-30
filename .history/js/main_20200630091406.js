'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}

function updateNumber() {
  let numberValue = number.Value;
  number.innerHTML = numberValue;
}

button.addEventListener('click', updateNumber);

console.log(updateNumber());
