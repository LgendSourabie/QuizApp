'use strict';

const questions = [
  {
    question: 'What does HTML stand for?',
    answer_1: 'Hyper Text Markup Language',
    answer_2: 'Hyperlink and Text Markup Language',
    answer_3: 'Highly Typed Multi-Language',
    answer_4: 'Hyper Transfer Markup Language',
    right_answer: 1,
  },

  {
    question: 'What is the purpose of the HTML &lt; head &gt; element?',
    answer_1: 'To define the main content of the document',
    answer_2: 'To define a header for a document',
    answer_3: 'To contain metadata about the document',
    answer_4: 'To create a section in the document',
    right_answer: 3,
  },
  {
    question: 'Which HTML tag is used for creating a hyperlink?',
    answer_1: '&lt;link&gt;',
    answer_2: '&lt;a&gt;',
    answer_3: '&lt;href&gt;',
    answer_4: '&lt;url&gt;',
    right_answer: 2,
  },
  {
    question:
      'In HTML, which attribute is used to specify the alternative text for an image?',
    answer_1: 'alt',
    answer_2: 'src',
    answer_3: 'title',
    answer_4: 'img-alt',
    right_answer: 1,
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    answer_1: '&lt;style&gt;',
    answer_2: '&lt;css&gt;',
    answer_3: '&lt;sheet&gt;',
    answer_4: '&lt;internal&gt;',
    right_answer: 1,
  },
  {
    question: 'What does the HTML acronym DOCTYPE stand for?',
    answer_1: 'Document Type',
    answer_2: 'Document Text',
    answer_3: 'Document Template',
    answer_4: 'Document Technology',
    right_answer: 1,
  },
  {
    question: 'What is the purpose of the HTML &lt; footer &gt; element?',
    answer_1: 'To define a footer for a section or page',
    answer_2: 'To create a section in the document',
    answer_3: 'To define the main content of the document',
    answer_4: 'To contain metadata about the document',
    right_answer: 1,
  },
  {
    question: 'Which HTML tag is used to define a paragraph?',
    answer_1: '&lt;para&gt;',
    answer_2: '&lt;p&gt;',
    answer_3: '&lt;pg&gt;',
    answer_4: '&lt;paragraph&gt;',
    right_answer: 2,
  },
  {
    question: 'What is the purpose of the HTML &lt; nav &gt; element?',
    answer_1: 'To define a navigation bar',
    answer_2: 'To create a new paragraph',
    answer_3: 'To contain metadata about the document',
    answer_4: 'To define a footer for a section or page',
    right_answer: 1,
  },

  {
    question: 'What is the purpose of the HTML &lt; aside &gt; element?',
    answer_1: 'To define an aside content in a document',
    answer_2: 'To create a table',
    answer_3: 'To define a header for a document',
    answer_4: 'To contain metadata about the document',
    right_answer: 1,
  },

  {
    question: 'What is the purpose of the HTML &lt; span &gt; element?',
    answer_1: 'To define a section in the document',
    answer_2: 'To contain metadata about the document',
    answer_3: 'To create a new paragraph',
    answer_4: 'To group inline-elements',
    right_answer: 4,
  },
  {
    question: 'Which HTML tag is used for creating an ordered list?',
    answer_1: '&lt;ul&gt;',
    answer_2: '&lt;ol&gt;',
    answer_3: '&lt;li&gt;',
    answer_4: '&lt;list&gt;',
    right_answer: 2,
  },
  {
    question: 'Which HTML tag is used for creating a line break?',
    answer_1: '&lt;br&gt;',
    answer_2: '&lt;lb&gt;',
    answer_3: '&lt;break&gt;',
    answer_4: '&lt;line&gt;',
    right_answer: 1,
  },
  {
    question: 'Which HTML tag is used for creating a hyperlink with an image?',
    answer_1: '&lt;link&gt;',
    answer_2: '&lt;a&gt;',
    answer_3: '&lt;img&gt;',
    answer_4: '&lt;url&gt;',
    right_answer: 2,
  },

  {
    question: 'What does JavaScript stand for?',
    answer_1: 'Java Source Code',
    answer_2: 'JavaScript Object Notation',
    answer_3: 'Just Scripting',
    answer_4: 'Java Serialized',
    right_answer: 3,
  },
  {
    question: 'Which keyword is used to declare a variable in JavaScript?',
    answer_1: 'var',
    answer_2: 'let',
    answer_3: 'const',
    answer_4: 'variable',
    right_answer: 1,
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    answer_1: 'To check if a variable is defined',
    answer_2: 'To determine the type of a value or expression',
    answer_3: 'To concatenate strings',
    answer_4: 'To declare a new variable',
    right_answer: 2,
  },
  {
    question: 'In JavaScript, what is an IIFE?',
    answer_1: 'Instantiated Instance Function Expression',
    answer_2: 'Inline If-Else',
    answer_3: 'Immediately Invoked Function Expression',
    answer_4: 'Internal Inline File Execution',
    right_answer: 3,
  },
  {
    question: "What is the purpose of the '===' operator in JavaScript?",
    answer_1: 'To assign a value to a variable',
    answer_2: 'To compare values for equality without type coercion',
    answer_3: 'To check if a variable is defined',
    answer_4: 'To concatenate strings',
    right_answer: 2,
  },
  {
    question:
      'Which built-in method is used to print a value to the console in JavaScript?',
    answer_1: 'console.log()',
    answer_2: 'print()',
    answer_3: 'log()',
    answer_4: 'display()',
    right_answer: 1,
  },
  {
    question:
      "What is the purpose of the 'try...catch' statement in JavaScript?",
    answer_1: 'To declare a variable',
    answer_2: 'To define a function',
    answer_3: 'To handle exceptions and errors',
    answer_4: 'To create a loop',
    right_answer: 3,
  },
  {
    question:
      'Which function is used to convert a string to an integer in JavaScript?',
    answer_1: 'parseInt()',
    answer_2: 'stringToInteger()',
    answer_3: 'toInteger()',
    answer_4: 'convertToInt()',
    right_answer: 1,
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer_1: 'To refer to the current object in a method',
    answer_2: 'To declare a variable',
    answer_3: 'To create a loop',
    answer_4: 'To define a function',
    right_answer: 1,
  },
  {
    question: 'Which event is triggered when a user clicks on an HTML element?',
    answer_1: 'mouseover',
    answer_2: 'click',
    answer_3: 'keypress',
    answer_4: 'change',
    right_answer: 2,
  },
  {
    question: 'What does CSS stand for?',
    answer_1: 'Counter Style Sheets',
    answer_2: 'Computer Style Sheets',
    answer_3: 'Creative Style Sheets',
    answer_4: 'Cascading Style Sheets',
    right_answer: 4,
  },
  {
    question:
      'Which CSS property is used to change the text color of an element?',
    answer_1: 'color',
    answer_2: 'text-color',
    answer_3: 'font-color',
    answer_4: 'text-style',
    right_answer: 1,
  },
  {
    question: "In CSS, what does the 'box-sizing' property do?",
    answer_1: 'Defines the style of a box',
    answer_2: 'Specifies the size of a box',
    answer_3:
      'Defines how the total width and height of an element is calculated',
    answer_4: 'Sets the color of a box',
    right_answer: 3,
  },
  {
    question: 'Which CSS selector targets all elements with a specific class?',
    answer_1: '.class',
    answer_2: '#id',
    answer_3: 'element',
    answer_4: 'tag',
    right_answer: 1,
  },
  {
    question: "What is the purpose of the CSS 'float' property?",
    answer_1:
      'To align text to the left or right within its containing element',
    answer_2: 'To create rounded corners for an element',
    answer_3: 'To set the opacity of an element',
    answer_4: 'To add a shadow to an element',
    right_answer: 1,
  },
  {
    question:
      'Which CSS property is used to control the spacing between lines of text?',
    answer_1: 'line-height',
    answer_2: 'text-spacing',
    answer_3: 'letter-spacing',
    answer_4: 'line-spacing',
    right_answer: 1,
  },
  {
    question: "In CSS, what does the 'z-index' property control?",
    answer_1: 'The transparency of an element',
    answer_2: 'The position of an element along the z-axis',
    answer_3: 'The size of an element',
    answer_4: 'The color of an element',
    right_answer: 2,
  },
  {
    question:
      'Which CSS pseudo-class is used to select the first child of an element?',
    answer_1: ':first-child',
    answer_2: ':first-element',
    answer_3: ':child-first',
    answer_4: ':first',
    right_answer: 1,
  },
  {
    question: "What is the purpose of the CSS 'position' property?",
    answer_1: 'To set the position of an element within its containing element',
    answer_2: 'To control the spacing between lines of text',
    answer_3: 'To set the opacity of an element',
    answer_4: 'To create rounded corners for an element',
    right_answer: 1,
  },
  {
    question: 'Which CSS property is used to add a shadow to an element?',
    answer_1: 'box-shadow',
    answer_2: 'shadow',
    answer_3: 'element-shadow',
    answer_4: 'text-shadow',
    right_answer: 1,
  },
  {
    question: 'What is Python?',
    answer_1: 'A type of snake',
    answer_2: 'A high-level programming language',
    answer_3: 'A large reptile',
    answer_4: 'A new species of lizard',
    right_answer: 2,
  },
  {
    question: 'Which of the following is used to comment in Python?',
    answer_1: '//',
    answer_2: '#',
    answer_3: '--',
    answer_4: '/* */',
    right_answer: 2,
  },
  {
    question: 'In Python, how do you declare a variable and assign a value?',
    answer_1: 'var x = 5',
    answer_2: 'let x = 5',
    answer_3: 'x = 5',
    answer_4: 'int x = 5',
    right_answer: 3,
  },
  {
    question: "What is the purpose of the 'if' statement in Python?",
    answer_1: 'To create a loop',
    answer_2: 'To define a function',
    answer_3: 'To check a condition and execute code accordingly',
    answer_4: 'To declare a variable',
    right_answer: 3,
  },
  {
    question: 'Which function is used to get user input in Python?',
    answer_1: 'input()',
    answer_2: 'read()',
    answer_3: 'getInput()',
    answer_4: 'userInput()',
    right_answer: 1,
  },
  {
    question: "In Python, what does the 'len()' function do?",
    answer_1: 'Calculates the length of a string',
    answer_2: 'Returns the square root of a number',
    answer_3: 'Finds the largest element in a list',
    answer_4: 'Converts a value to lowercase',
    right_answer: 1,
  },
  {
    question:
      'Which of the following is a valid way to create a list in Python?',
    answer_1: '[1, 2, 3]',
    answer_2: '(1, 2, 3)',
    answer_3: '{1, 2, 3}',
    answer_4: '1:2:3',
    right_answer: 1,
  },
  {
    question: "What is the purpose of the 'for' loop in Python?",
    answer_1: 'To define a function',
    answer_2: 'To check a condition',
    answer_3: 'To iterate over a sequence (such as a list or string)',
    answer_4: 'To create a loop',
    right_answer: 3,
  },
  {
    question: 'Which of the following is used to define a function in Python?',
    answer_1: 'method',
    answer_2: 'def',
    answer_3: 'function',
    answer_4: 'define',
    right_answer: 2,
  },
  {
    question: "What does the 'return' keyword do in Python?",
    answer_1: 'Ends the program',
    answer_2: 'Exits a loop',
    answer_3: 'Returns a value from a function',
    answer_4: 'Restarts the program',
    right_answer: 3,
  },
];

let currentQuestion = 0;
let score = 0;
let highscore = 0;
let second = 500;
let numberTry = 1;
const TOTAL_SCORE = questions.length;
const HTML_QUESTION = 14;
const JAVASCRIPT_QUESTION = 24;
const CSS_QUESTION = 34;
let progressPercent = (100 * (currentQuestion + 1)) / TOTAL_SCORE;

const initialisation = function () {
  // document.getElementById("total-score").innerHTML = TOTAL_SCORE;
  showQuestion();
};

const showQuestion = function () {
  if (currentQuestion >= questions.length || second === 0) {
    timerStop();
    scores(score, score >= highscore ? score : highscore);
    document.getElementById('show-result').style.display = '';
    document.getElementById('show-trophy').style.display = '';
    document.getElementById('game-window').style.display = 'none';
    // document.getElementById("game-window-bottom").style.display = "none";
  } else {
    progressPercent = (100 * (currentQuestion + 1)) / questions.length;
    document.getElementById(
      'progress-bar'
    ).style.width = `${progressPercent.toFixed()}%`;
    document.getElementById(
      'progress-bar'
    ).innerHTML = `${progressPercent.toFixed()}%`;
    document.getElementById(`question`).innerHTML =
      questions[currentQuestion][`question`];
    for (let i = 0; i < 4; i++) {
      document.getElementById(`answer_${i + 1}`).innerHTML =
        questions[currentQuestion][`answer_${i + 1}`];
    }
  }
};

const answer = function (selectedAnswer) {
  if (numberTry === 1) {
    if (
      selectedAnswer.slice(-1) == questions[currentQuestion]['right_answer']
    ) {
      score++;
      document.getElementById(selectedAnswer).parentNode.style.backgroundColor =
        'rgb(183,247,153)';
      setTimeout(nextQuestion, 400);
      stateBar();
    } else {
      document.getElementById(selectedAnswer).parentNode.style.backgroundColor =
        'rgb(255,163,164)';
      document.getElementById(
        `answer_${questions[currentQuestion]['right_answer']}`
      ).parentNode.style.backgroundColor = 'rgb(183,247,153)';
      setTimeout(nextQuestion, 400);
      stateBar();
    }
    // document.getElementById("enable-button-next").disabled = false;
    // document.getElementById("enable-button-previous").disabled = false;
  }

  numberTry++;
};

const scores = function (scoreValue, highScoreValue) {
  score = (100 * scoreValue) / TOTAL_SCORE;
  highscore = (100 * highScoreValue) / TOTAL_SCORE;
  document.getElementById('score').innerHTML = `${score.toFixed()} %`;
  document.getElementById('highscore').innerHTML = `${highscore.toFixed()} %`;
};

const startGame = function () {
  document.getElementById('start').style.display = 'none';
  document.getElementById('game-window').style.display = 'block';
  // document.getElementById("game-window-bottom").style.display = "flex";
  initialisation();
  timerStart();
};

const nextQuestion = function () {
  currentQuestion++;
  numberTry = 1;
  showQuestion();
  resetBoungroundColor();
  // document.getElementById("enable-button-next").disabled = true;
  // document.getElementById("enable-button-previous").disabled = true;
};

const resetBoungroundColor = function () {
  document.getElementById('answer_1').parentNode.style.backgroundColor = '';
  document.getElementById('answer_2').parentNode.style.backgroundColor = '';
  document.getElementById('answer_3').parentNode.style.backgroundColor = '';
  document.getElementById('answer_4').parentNode.style.backgroundColor = '';
  document.getElementById('answer_1').parentNode.style.backgroundColor = '';
  document.getElementById('answer_2').parentNode.style.backgroundColor = '';
  document.getElementById('answer_3').parentNode.style.backgroundColor = '';
  document.getElementById('answer_4').parentNode.style.backgroundColor = '';
};

const previousQuestion = function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
    resetBoungroundColor();
    document.getElementById('enable-button-next').disabled = true;
    document.getElementById('enable-button-previous').disabled = true;
  }
};

const replay = function () {
  highscore = (TOTAL_SCORE * highscore) / 100;
  score = 0;
  currentQuestion = 0;
  second = 500;
  timerStart();
  startGame();
  stateBar();
  showQuestion();
  document.getElementById('state').style.transform = '';
  document.getElementById('link-html').style.color = '';
  document.getElementById('link-py').style.color = '';
  document.getElementById('show-result').style.display = 'none';
  document.getElementById('show-trophy').style.display = 'none';
  document.getElementById('timer-1').style.backgroundColor = '';
  document.getElementById('timer-1').style.color = '';
  document.getElementById('timer-2').style.backgroundColor = '';
  document.getElementById('timer-2').style.color = '';
  // document.getElementById("enable-button-next").disabled = true;
  // document.getElementById("enable-button-previous").disabled = true;
};

const stateBar = function () {
  if (
    currentQuestion >= HTML_QUESTION &&
    currentQuestion < JAVASCRIPT_QUESTION
  ) {
    document.getElementById('state').style.transform = 'translateY(37.2px)';
    document.getElementById('link-js').style.color = 'azure';
    document.getElementById('link-html').style.color =
      'rgba(255, 255, 255, 0.3)';
  } else if (
    currentQuestion >= JAVASCRIPT_QUESTION &&
    currentQuestion < CSS_QUESTION
  ) {
    document.getElementById('state').style.transform = 'translateY(74.4px)';
    document.getElementById('link-css').style.color = 'azure';
    document.getElementById('link-js').style.color = 'rgba(255, 255, 255, 0.3)';
  } else if (currentQuestion >= CSS_QUESTION) {
    document.getElementById('state').style.transform = 'translateY(111.6px)';
    document.getElementById('link-py').style.color = 'azure';
    document.getElementById('link-css').style.color =
      'rgba(255, 255, 255, 0.3)';
  }
};

const timer = function () {
  if (second > 0) {
    second--;
    document.getElementById('timer-1').textContent = second;
    document.getElementById('timer-2').textContent = second;
    console.log('ja');
    if (second <= 10) {
      danger();
    }
  } else if (second === 0) {
    showQuestion();
    second--;
    console.log('transition');
  }
  console.log('nein');
};

const danger = function () {
  let timerEl1 = document.getElementById('timer-1');
  let timerEl2 = document.getElementById('timer-2');
  timerEl1.style.backgroundColor =
    timerEl1.style.backgroundColor === 'azure' ? '#E1332D' : 'azure';
  timerEl2.style.backgroundColor =
    timerEl2.style.backgroundColor === 'azure' ? '#E1332D' : 'azure';
  timerEl1.style.color = timerEl1.style.color === 'black' ? 'azure' : 'black';
  timerEl2.style.color = timerEl2.style.color === 'black' ? 'azure' : 'black';
};

let isIntervallSet;
const timerStart = function () {
  if (!isIntervallSet) {
    isIntervallSet = setInterval(timer, 1000);
  }
};

const timerStop = function () {
  clearInterval(isIntervallSet);
  isIntervallSet = null;
};
