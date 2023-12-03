const renderScores = function () {
    const highScores = JSON.parse(localStorage.getItem('highScores'));
    const highScoresOl = document.querySelector('#highscores');
    const h1 = document.querySelector('h1');
    highScoresOl.innerHTML = '';

    if (highScores) {
        h1.textContent = 'Highscores';
        for (const score of highScores) {
            const li = document.createElement('li');
            li.textContent = `${score.initials}: ${score.score}`;
            highScoresOl.append(li);
        }
    } else {
        h1.textContent = 'No scores to display';
    }
};

renderScores();

const clearScores = (function () {
    const clearBtn = document.querySelector('#clear');

    clearBtn.addEventListener('click', () => {
        localStorage.clear();
        renderScores();
    });
})();
