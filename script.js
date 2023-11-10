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
  showQuestion();
};

const showQuestion = function () {
  let question = questions[currentQuestion];

  document.getElementById('question').innerHTML = question['question'];
  for (let i = 0; i < 4; i++) {
    const response = question[`answer_${i + 1}`];
    const question_i = `${response}`;
    document.getElementById(`answer_${i + 1}`).innerHTML = question_i;
  }
};

const answer = function (selectedAnswer) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selectedAnswer.slice(-1);
  if (selectedQuestionNumber == question['right_answer']) {
    document
      .getElementById(selectedAnswer)
      .parentNode.classList.add('bg-success');
  } else {
    document
      .getElementById(selectedAnswer)
      .parentNode.classList.add('bg-danger');
  }
};
