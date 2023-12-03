const startScreen = document.querySelector('#start-screen');
const timeSpan = document.querySelector('#time');
const startBtn = document.querySelector('#start');
const endScreen = document.querySelector('#end-screen');
const finalScoreSpan = document.querySelector('#final-score');
const initialsInput = document.querySelector('#initials');
const submitBtn = document.querySelector('#submit');
const answers = [3, 3, 4, 3, 4];
let timer;

let totalTime = 75;

const startQuiz = function () {
    timeSpan.textContent = totalTime;
    timer = setInterval(function () {
        totalTime--;
        timeSpan.textContent = totalTime;
        if (totalTime <= 0) {
            endQuiz();
        }
    }, 1000);

    renderQuestion(1);
};

startBtn.addEventListener('click', startQuiz);

// Feedback for answer
const actionAnswer = function (answer) {
    feedbackDiv.classList.remove('hide');
    const correctAudio = new Audio('assets/sfx/correct.wav');
    const incorrectAudio = new Audio('assets/sfx/incorrect.wav');

    if (answer === 'correct') {
        correctAudio.play();
        feedbackDiv.textContent = 'Correct!';
    } else {
        incorrectAudio.play();
        feedbackDiv.textContent = 'Wrong!';
        totalTime -= 15;
        timeSpan.textContent = totalTime;
    }
};

// render next question after a choice has been chosen
const handleChoice = function (e) {
    element = e.target;
    if (element.matches('button')) {
        const questionNumber = parseInt(element.dataset.question);
        const chosenAnswer = parseInt(element.dataset.choice);
        if (questionNumber < 5) {
            renderQuestion(questionNumber + 1);
        }

        if (chosenAnswer === answers[questionNumber - 1]) {
            actionAnswer('correct');
        } else actionAnswer('incorrect');

        if (questionNumber === 5) endQuiz();
    }
};

const endQuiz = function () {
    clearInterval(timer);
    endScreen.classList.remove('hide');
    questionsDiv.classList.add('hide');
    finalScoreSpan.textContent = totalTime > 0 ? totalTime : '0';
    timeSpan.textContent = totalTime > 0 ? totalTime : '0';
};

choicesDiv.addEventListener('click', handleChoice);

// Record score and initials to local storage
const handleSubmit = function (e) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const initials = document.querySelector('#initials').value.toUpperCase();
    const record = {
        initials: initials,
        score: totalTime > 0 ? totalTime : '0',
    };
    highScores.push(record);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    document.location.href = './highscores.html';
};

submitBtn.addEventListener('click', handleSubmit);
