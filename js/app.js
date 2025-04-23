const buttons = document.querySelectorAll('.choice-btn');
const resultDisplay = document.getElementById('result-display');
const winDisplay = document.getElementById('win');
const drawDisplay = document.getElementById('draw');
const loseDisplay = document.getElementById('lose');
const resetButton = document.getElementById('reset');

const choices = ['Pierre', 'Feuille', 'Ciseaux'];
const score = { win: 0, draw: 0, lose: 0 };

function pluralize(count, singular, plural) {
    return count + ' ' + (count > 1 ? plural : singular);}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        const robotChoice = choices[Math.floor(Math.random() * 3)];
        let outcome;

        if (playerChoice === robotChoice) {
            outcome = 'draw';
        } else if (
            (playerChoice === 'Pierre' && robotChoice === 'Ciseaux') ||
            (playerChoice === 'Ciseaux' && robotChoice === 'Feuille') ||
            (playerChoice === 'Feuille' && robotChoice === 'Pierre')
        ) {
            outcome = 'win';
        } else {
            outcome = 'lose';
        }

        score[outcome]++;
        updateScore();
        resultDisplay.innerHTML = `J'ai joué : ${playerChoice}<br>Le robot a joué : ${robotChoice}<br>C'est une <strong>${outcome === 'draw' ? 'égalité' : outcome === 'win' ? 'victoire' : 'défaite'}</strong>`;
    });
});

function updateScore() {
    winDisplay.textContent = pluralize(score.win, "victoire", "victoires");
    drawDisplay.textContent = pluralize(score.draw, "égalité", "égalités");
    loseDisplay.textContent = pluralize(score.lose, "défaite", "défaites");
}

resetButton.addEventListener('click', () => {
    score.win = 0;
    score.draw = 0;
    score.lose = 0;
    updateScore();
    resultDisplay.textContent = '';
});