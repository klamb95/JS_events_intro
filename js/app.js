document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const button = document.querySelector('#button')
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  const selectInput = document.querySelector('#select');
  selectInput.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

});

const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button was clicked, yay!';
};

const handleInput = function (event) {
  const resultInput = document.querySelector('#input-result');
  resultInput.textContent = `You typed: ${event.target.value}`;
};

const handleSelectChange = function (event) {
  const selectParagraph = document.querySelector('#select-result');
  selectParagraph.textContent = `You chose: ${event.target.value}`;
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  const formParagraph = document.querySelector('#form-result');
  formParagraph.textContent = `It's gonna be: ${event.target.first_name.value} ${event.target.last_name.value}`
}

