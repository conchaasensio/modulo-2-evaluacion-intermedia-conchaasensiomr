'use strict';

const number = document.querySelector('.js-number-introduce');
const button = document.querySelector('.js-submit-button');

function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * 100);
  return randomNumber;
}
console.log(randomNumber);

function updateNumber() {
  let numberValue = number.value;
  number.innerHTML = numberValue;
  console.log(numberValue);
}

button.addEventListener('click', updateNumber);
