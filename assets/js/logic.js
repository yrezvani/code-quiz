const startScreen = document.querySelector('#start-screen');
const timeSpan = document.querySelector('#time');
const endScreen = document.querySelector('#end-screen');
const finalScoreSpan = document.querySelector('#final-score');
const initialsInput = document.querySelector('#initials');
const submitBtn = document.querySelector('#submit');
const answers = [3, 3, 4, 3];
let timer;

let totalTime = 75;

const startQuiz = function () {
    timer = setInterval(function () {
        timeSpan.textContent = totalTime--;
        if (totalTime === 0) {
            clearInterval(timer);
            alert('You lost');
        }
    }, 1000);

    renderQuestion(1);
};

startBtn.addEventListener('click', startQuiz);

const actionAnswer = function (answer) {
    feedbackDiv.classList.remove('hide');
    const correctAudio = new Audio('assets/sfx/correct.wav');
    const incorrectAudio = new Audio('assets/sfx/incorrect.wav');

    if (answer === 'correct') {
        correctAudio.play();
        feedbackDiv.textContent = 'Correct!';
    }
    if (answer === 'incorrect') {
        incorrectAudio.play();
        feedbackDiv.textContent = 'Wrong!';
        totalTime -= 15;
        timeSpan.textContent = totalTime;
    }
};

const handleChoice = function (e) {
    element = e.target;
    if (element.classList.contains('choice')) {
        const questionNumber = parseInt(element.dataset.question);
        const chosenAnswer = parseInt(element.dataset.choice);
        console.log(questionNumber);
        if (questionNumber < 4) {
            renderQuestion(questionNumber + 1);
            console.log(questionNumber + 1);
        }

        if (chosenAnswer === answers[questionNumber - 1]) {
            actionAnswer('correct');
        } else actionAnswer('incorrect');

        if (questionNumber === 4) {
            clearInterval(timer);
            finalScoreSpan.textContent = totalTime;
            timeSpan.textContent = totalTime;
            console.log(timer);
            endScreen.classList.remove('hide');
            questionsDiv.classList.add('hide');
        }
    }
};

choicesDiv.addEventListener('click', handleChoice);

const handleSubmit = function (e) {
    const initials = document.querySelector('#initials').value;
    const record = {
        initials: initials,
        score: totalTime,
    };
    highScores.push(record);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    document.location.href = 'highscores.html';
};

submitBtn.addEventListener('click', handleSubmit);
