'use strict';

const number = document.querySelector('.js-number-introduce');
console.log(number.value);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
