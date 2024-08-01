// game.js

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highScore = 0;
let currentGuess = null;
let selectedCircle = null;

// Refactoring function
const displayMessage = function (message, className) {
  const messageElement = document.querySelector(".message");
  messageElement.textContent = message;
  messageElement.className = `message ${className}`; // Apply the appropriate class
};

// Handle circle clicks
document.querySelectorAll(".guess-circle").forEach((circle) => {
  circle.addEventListener("click", function () {
    if (selectedCircle) {
      selectedCircle.classList.remove("selected"); // Remove previous selection
    }
    currentGuess = Number(this.dataset.number);
    this.classList.add("selected"); // Add selection to the clicked circle
    selectedCircle = this; // Keep track of the selected circle
  });
});

document.querySelector(".check").addEventListener("click", function () {
  if (score <= 0) {
    // Show "You lost" message if score is zero or negative
    displayMessage("😢 You lost", "");
    return; // Stop further execution if the game is lost
  }

  // Add animation class to button
  this.classList.add("check-animate");

  // Remove the animation class after animation ends
  this.addEventListener("animationend", function () {
    this.classList.remove("check-animate");
  });

  if (!currentGuess) {
    displayMessage("⛔️ No number selected!", "");
  } else if (currentGuess === secretNumber) {
    displayMessage("👌✨ Correct Number!", "");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b379";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (currentGuess > secretNumber) {
    displayMessage("Its high", "high");
    score--;
    document.querySelector(".score").textContent = score;
    if (score <= 0) {
      displayMessage("😢 You lost", "");
    }
  } else if (currentGuess < secretNumber) {
    displayMessage("Its low", "low");
    score--;
    document.querySelector(".score").textContent = score;
    if (score <= 0) {
      displayMessage("😢 You lost", "");
    }
  }

  // Remove the selected color and scaling after checking
  if (selectedCircle) {
    selectedCircle.classList.remove("selected");
    selectedCircle = null;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // Reset game state
  secretNumber = Math.trunc(Math.random() * 10) + 1; // Generate a new secret number
  score = 10; // Reset score to initial value
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  currentGuess = null;
  document
    .querySelectorAll(".guess-circle")
    .forEach((c) => c.classList.remove("selected"));
  displayMessage("Start guessing...", "");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
