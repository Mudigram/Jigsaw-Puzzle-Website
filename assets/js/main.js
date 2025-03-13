// Variables
let playerName = '';
let startTime;
let timerInterval;

// Handle Game Start
document.getElementById('player-form').addEventListener('submit', (e) => {
    e.preventDefault();
    playerName = document.getElementById('player-name').value.trim();

    if (playerName === '') {
        alert('Please enter your name to play.');
        return;
    }

    alert(`Welcome, ${playerName}! Your time will be recorded.`);
    startGame();
});

// Start Puzzle Game Timer
function startGame() {
    const gameContainer = document.getElementById('unity-container');
    gameContainer.innerHTML = '<p>🧩 Puzzle is loading...</p>';

    // Record Start Time
    startTime = Date.now();

    // Simulate Puzzle Solving (replace with Unity event later)
    timerInterval = setTimeout(() => {
        finishGame();
    }, Math.random() * 60000 + 15000); // Random puzzle time (15s to 75s for demo)
}

// Finish Game and Save Score
function finishGame() {
    clearTimeout(timerInterval);

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000); // Time in seconds

    alert(`🎉 Puzzle Complete! You took ${timeTaken} seconds.`);

    saveScore(playerName, timeTaken);
    window.location.href = 'top-players.html'; // Redirect to Leaderboard
}

// Save Score in Local Storage
function saveScore(name, time) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Add new score
    leaderboard.push({ name, time });

    // Sort leaderboard by shortest time
    leaderboard.sort((a, b) => a.time - b.time);

    // Keep only top 10 scores
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 10)));
}
