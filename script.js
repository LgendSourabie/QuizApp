'use strict';

let questions = [
  {
    question: 'Wer hat HTML erfunden?',
    answer_1: 'Ronnie Williams',
    answer_2: 'Lady Gaga',
    answer_3: 'Tim Berners-Lee',
    answer_4: 'Justin Bieber',
    right_answer: 3,
  },
  {
    question: 'Weche Konzern gehört zu Elon Munsk?',
    answer_1: 'Toyota',
    answer_2: 'Tesla',
    answer_3: 'BMW',
    answer_4: 'Fiat',
    right_answer: 2,
  },
];

let currentQuestion = 0;
let score = 0;
const AUDIO_SUCCESS = new Audio('sound/win.mp3');
const AUDIO_FAILURE = new Audio('sound/lost.mp3');

const initialize = function () {
  document.getElementById('number-question').innerHTML = questions.length;
  document.getElementById('questionNumber').innerHTML = questions.length;
  showQuestion();
};

const showQuestion = function () {
  if (currentQuestion >= questions.length) {
    document.getElementById('main-image').src = /*html*/ `/images/trophy.png`;
    document.getElementById('diplayButton').style.display = 'flex';
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style.display = 'none';
  } else {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.trunc(100 * percent);
    let question = questions[currentQuestion];
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('current-number').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    for (let i = 0; i < 4; i++) {
      const response = question[`answer_${i + 1}`];
      const question_i = `${response}`;
      document.getElementById(`answer_${i + 1}`).innerHTML = question_i;
    }
    document.getElementById('next-button').disabled = true;
  }
};

const answer = function (selectedAnswer) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selectedAnswer.slice(-1);

  let idRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question['right_answer']) {
    document
      .getElementById(selectedAnswer)
      .parentNode.classList.add('bg-success');
    score++;
    document.getElementById('score').innerHTML = score;
    AUDIO_SUCCESS.play();
  } else {
    document
      .getElementById(selectedAnswer)
      .parentNode.classList.add('bg-danger');
    document
      .getElementById(idRightAnswer)
      .parentNode.classList.add('bg-success');
    AUDIO_FAILURE.play();
  }
  document.getElementById('next-button').disabled = false;
};

const showNextQuestion = function () {
  currentQuestion++;
  showQuestion();
  resetButton();
};

function resetButton() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

const restart = function () {
  currentQuestion = 0;
  score = 0;
  document.getElementById('main-image').src = /*html*/ `/images/woman.png`;
  document.getElementById('questionBody').style.display = 'block';
  document.getElementById('diplayButton').style.display = 'none';
  document.getElementById('endScreen').style.display = 'none';

  document.getElementById('score').innerHTML = score;
  initialize();
};
