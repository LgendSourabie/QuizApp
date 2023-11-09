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

const initialize = function () {
  document.getElementById('number-question').innerHTML = questions.length;
  showCurrentQuestion(currentQuestion);
};

const showCurrentQuestion = function (indexQuestion) {
  let question_init = document.getElementById('frage');

  question_init.innerHTML = questions[indexQuestion].question;
  for (let i = 0; i < 4; i++) {
    const response = questions[indexQuestion][`answer_${i + 1}`];
    const question_i = `${response}`;
    let questionEntry = document.getElementById(`question${i + 1}`);
    questionEntry.innerHTML = question_i;
  }
};

const generateCurrentIndex = function () {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showCurrentQuestion(currentQuestion);
  }
};
