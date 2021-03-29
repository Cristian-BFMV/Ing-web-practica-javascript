const arr = [1, 2, 3, 1, 3, 1, 5, 1, 5, 2, 11];

const text = arr.toString();

const firstParagraph = document.querySelector('.first-arr');
firstParagraph.innerHTML = `[${text}]`;

const repeatedNumbers = arr => {
  const result = [];
  arr.forEach((number, index) => {
    for (let i = 0; i < arr.length; i++) {
      if (number === arr[i] && index !== i) {
        result.push(number);
        i = arr.length;
      }
    }
  });
  return result;
};

const resultArr = `[${repeatedNumbers(arr).toString()}]`;
const secondParagraph = document.querySelector('.result-arr');
secondParagraph.innerHTML = resultArr;
