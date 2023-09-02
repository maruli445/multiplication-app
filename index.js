// Script ini hanya diperlukan jika Anda ingin menghasilkan warna acak

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', function () {
  var background = document.querySelector('.background');
  background.style.backgroundColor = getRandomColor();
});

// script random number 1-10

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

//mengambil nilai berdasarkan id di html

const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');

const inputEl = document.getElementById('input');

const scoreEl = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}`;
//mengkoreksi nilai dalam kotak jawaban

const correctAns = num1 * num2;

//mengambil nilai dari kota jawaban ( addevent) lalu masukkan nilai yang diambil ke submit, terakhir panggil call back function yaitu ke input awal yang kosong

formEl.addEventListener('submit', () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage;
  } else {
    score--;
    updateLocalStorage;
  }
});

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}
