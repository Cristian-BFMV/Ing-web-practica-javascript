const form = document.querySelector('.number-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = document.querySelector('.number');
  const modalText = document.querySelector('.result-text');
  const errorText = document.querySelector('.error-text');
  errorText.innerHTML = '';
  const number = Number(value);
  if (isNaN(number) || number <= 0) {
    errorText.innerHTML = 'Ingrese un número valido o mayor a cero';
  } else {
    const result = convertToRoman(number);
    console.log(result);
    document.getElementById('modal1').classList.add('is-visible');
    modalText.innerHTML = result;
  }
});

const convertToRoman = num => {
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = '';
  const keys = Object.keys(romanNumbers);
  keys.forEach(number => {
    while (num >= romanNumbers[number]) {
      roman += number;
      num -= romanNumbers[number];
    }
  });
  return roman;
};

document.addEventListener('click', e => {
  if (e.target == document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove('is-visible');
  }
});

const closeModalButton = document.querySelector('.close-modal');

closeModalButton.addEventListener('click', function () {
  document.querySelector('.modal.is-visible').classList.remove('is-visible');
});
