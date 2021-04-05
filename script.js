'use strict';
/*
console.log(document.querySelector('.message').textContent = 'start Guessing... ');
document.querySelector('.message').textContent = 'Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNum);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Numebr';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.check').textContent = 'You won Play Again';
    document.getElementById('.check').disabled = true;
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      document.querySelector(
        '.message'
      ).textContent = `You lost!! Play Again and the Number is ${secretNum}`;
      document.querySelector('.check').textContent = 'You lost!! Play Again';
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You lost!! Play Again and the Number is ${secretNum}`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').textContent = 'You lost!! Play Again';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
  document.querySelector('.check').textContent = 'Check!';
  document.getElementById('.check').disabled = false;
});

document.addEventListener('keydown', function (e) {
  console.log(e);
});
