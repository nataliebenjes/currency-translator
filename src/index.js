
import './css/styles.css';
import TranslateService from './translator.js';

// Business Logic

function getTranslation(phrase) {
  console.log(phrase);
  let promise = TranslateService.getTranslation(phrase);
  promise.then(function (conversion_rates) {

    printElements(conversion_rates.USD);
  }, function (conversion_rates) {
    printError(conversion_rates.USD);
  });
}

// UI Logic

function printElements(translation) {
  document.querySelector('#showResponse').innerText = `Your translated phrase is ${translation}`;
}

function printError(error) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const phrase = document.querySelector('#entry').value;
  getTranslation(phrase);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});