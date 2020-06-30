'use strict';

const number = document.querySelector('.js-number-introduce').value;
console.log(number);

function getRandomNumber(max) {
  return Math.ceil(Math.random(100) * 100);
}

let result = getRandomNumber(100);
console.log(result);
