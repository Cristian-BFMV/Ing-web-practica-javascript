const form = document.querySelector('.text-form');
const abcedario = [
  'a',
  'b',
  'c',
  'd',
  'f',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

form.addEventListener('submit', event => {
  event.preventDefault();
  const modalText = document.querySelector('.result-text');
  const { value } = document.querySelector('.text');
  let isPangrama = true;
  const text = value.toLowerCase();
  abcedario.forEach(letter => {
    if (text.indexOf(letter) === -1) {
      isPangrama = false;
    }
  });
  const result = isPangrama ? 'El texto ingresado es pangrama' : 'El texto ingresado no es pangrama';
  console.log(result);
  document.getElementById('modal1').classList.add('is-visible');
  modalText.innerHTML = result;
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
