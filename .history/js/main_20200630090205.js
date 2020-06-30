'use strict';

const number = document.querySelector('.js-number-introduce').value;
console.log(number);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
