const questionsDiv = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const choicesDiv = document.querySelector('#choices');
const startBtn = document.querySelector('#start');
const feedbackDiv = document.querySelector('#feedback');

// create question objects
const question1 = {
    number: 1,
    question: 'Commonly used data types DO NOT include:',
    choices: ['Strings', 'Booleans', 'alerts', 'numbers'],
};

const question2 = {
    number: 2,
    question: 'The condition in an if/else statement is enclosed within _____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
};
const question3 = {
    number: 3,
    question: 'Arrays in Javascript can be used to store ____.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
};
const question4 = {
    number: 4,
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
};

// create array of question objects
const questions = [question1, question2, question3, question4];

// render questions
const renderQuestion = function (number) {
    feedbackDiv.classList.add('hide');
    startScreen.classList.add('hide');
    questionsDiv.classList.remove('hide');
    choicesDiv.innerHTML = '';
    questionTitle.textContent = questions[number - 1].question;

    for (const [index, choice] of questions[number - 1].choices.entries()) {
        const choiceElement = document.createElement('div');
        choiceElement.classList.add('choice');
        choiceElement.textContent = choice;
        choiceElement.dataset.question = number;
        choiceElement.dataset.choice = index + 1;
        choicesDiv.append(choiceElement);
    }
};
