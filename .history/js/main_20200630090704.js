'use strict';

const number = document.querySelector('.js-number-introduce');
console.log(number);

function getRandomNumber(max) {
  return Math.ceil(Math.random(100) * 100);
}

function updateNumber() {
  let numberValue = number.nodeValue;
  number.innerHTML = numberValue;
}
