'use strict';
$(function() {
  $('#number-chooser').submit((event) => {
    event.preventDefault();
    let result = document.getElementById('number-choice').value;
    let results = document.querySelector('.js-results');
    for (let i = 0; i <= result; i++) {
      let addedClass = document.createElement('div');
      addedClass.classList.add('fizz-buzz-item');
      let addedSpan = document.createElement('span');
      if (i % 3 === 0 && i % 5 !== 0) {
        addedClass.classList.add('fizz');
        addedSpan.textContent = 'fizz';
      } else if (i % 3 !== 0 && i % 5 === 0) {
        addedClass.classList.add('buzz');
        addedSpan.textContent = 'buzz';
      } else if (i % 3 === 0 && i % 5 === 0) {
        addedClass.classList.add('fizzbuzz');
        addedSpan.textContent = 'fizzbuzz';
      } else {
        addedSpan.textContent = i;
      }
      addedClass.appendChild(addedSpan);
      results.appendChild(addedClass);
    }
  });
});
