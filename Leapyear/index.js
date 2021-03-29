const form = document.querySelector('.year-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = document.querySelector('.year');
  const year = Number(value);
  const errorText = document.querySelector('.error-text');
  errorText.innerHTML = '';
  if (isNaN(year)) {
    errorText.innerHTML = 'Ingrese un año valido';
  } else {
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? true : false;
    const result = isLeapYear ? `El año ${year} es bisiesto` : `El año ${year} no es bisiesto`;
    document.getElementById('modal1').classList.add('is-visible');
    const modalText = document.querySelector('.result-text');
    modalText.innerHTML = result;
  }
});

document.addEventListener('click', e => {
  if (e.target == document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove('is-visible');
  }
});

const closeModalButton = document.querySelector('.close-modal');

closeModalButton.addEventListener('click', function () {
  document.querySelector('.modal.is-visible').classList.remove('is-visible');
});
