const questionsDiv = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const choicesDiv = document.querySelector('#choices');
const feedbackDiv = document.querySelector('#feedback');

// create question objects
const question1 = {
    question: 'Commonly used data types DO NOT include:',
    choices: ['Strings', 'Booleans', 'alerts', 'numbers'],
};

const question2 = {
    question: 'The condition in an if/else statement is enclosed within _____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
};
const question3 = {
    question: 'Arrays in Javascript can be used to store ____.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
};
const question4 = {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
};
const question5 = {
    question: 'A very useful tool used during development and debugging for printing to the debugger is:',
    choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
};

// Array of question objects
const questions = [question1, question2, question3, question4, question5];

// render questions
const renderQuestion = function (number) {
    feedbackDiv.classList.add('hide');
    startScreen.classList.add('hide');
    questionsDiv.classList.remove('hide');
    choicesDiv.innerHTML = '';
    questionTitle.textContent = questions[number - 1].question;

    for (const [index, choice] of questions[number - 1].choices.entries()) {
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = choice;
        choiceBtn.dataset.question = number;
        choiceBtn.dataset.choice = index + 1;
        choicesDiv.append(choiceBtn);
    }
};
