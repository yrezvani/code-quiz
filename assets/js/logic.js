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

    getQuestion(1);
};

startBtn.addEventListener('click', startQuiz);
