// Scroll to section function
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}




// Check the quiz answer
function checkHomeQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    const result = document.getElementById('home-quiz-result');

    if (!selected) {
        result.textContent = "Please select an answer!";
        result.style.color = "red";
    } else if (selected.value === "8") {
        result.textContent = "Correct! 5 + 3 equals 8.";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect. Try again!";
        result.style.color = "red";
    }
}

// Check the user's answer in the quiz
function checkQuizAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const result = document.getElementById('quiz-result');

    if (!selected) {
        result.textContent = "Please select an answer!";
        result.style.color = "red";
    } else if (selected.value === "correct") {
        result.textContent = "Correct! HTML stands for Hypertext Markup Language.";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect. Try again!";
        result.style.color = "red";
    }
}




// Calculator functionality
function appendCalcValue(value) {
    const input = document.getElementById('calc-input');
    input.value += value;
}

function clearCalc() {
    const input = document.getElementById('calc-input');
    input.value = '';
}

function calculate() {
    const input = document.getElementById('calc-input');
    try {
        input.value = eval(input.value);
    } catch {
        input.value = 'Error';
    }
}

// Puzzle Variables
let num1, num2, correctAnswer;

// Generate a new puzzle
function generatePuzzle() {
    const puzzleQuestion = document.getElementById('puzzle-question');
    const puzzleResult = document.getElementById('puzzle-result');
    const puzzleAnswer = document.getElementById('puzzle-answer');

    // Generate two random numbers and a random operator
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    const operatorIndex = Math.floor(Math.random() * 3);
    const operators = ['+', '-', '*'];
    const operator = operators[operatorIndex];

    // Calculate the correct answer
    correctAnswer = eval(`${num1} ${operator} ${num2}`);

    // Display the puzzle
    puzzleQuestion.textContent = `What is ${num1} ${operator} ${num2}?`;
    puzzleResult.textContent = ''; // Clear previous results
    puzzleAnswer.value = ''; // Clear input
}

// Check the user's answer
function checkPuzzle() {
    const puzzleResult = document.getElementById('puzzle-result');
    const userAnswer = parseFloat(document.getElementById('puzzle-answer').value);

    if (isNaN(userAnswer)) {
        puzzleResult.textContent = "Please enter a valid number!";
        puzzleResult.style.color = "red";
    } else if (userAnswer === correctAnswer) {
        puzzleResult.textContent = "Correct! Great job!";
        puzzleResult.style.color = "green";
    } else {
        puzzleResult.textContent = "Incorrect. Try again!";
        puzzleResult.style.color = "red";
    }
}

// Initialize with the first puzzle
generatePuzzle();


// Get lightbox and image elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Add click event to all gallery images
document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex"; // Show lightbox
        lightboxImg.src = img.src; // Set lightbox image source
        lightboxImg.alt = img.alt; // Set alt text
    });
});

// Hide lightbox when clicking anywhere outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none"; // Hide lightbox
    }
});




// Simple Interest Calculator
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const resultField = document.getElementById('calc-result');

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        resultField.textContent = "Please enter valid numbers.";
        resultField.style.color = "red";
        return;
    }

    const interest = (principal * rate * time) / 100;
    resultField.textContent = `Simple Interest: ₹${interest.toFixed(2)}`;
    resultField.style.color = "green";
}

function checkAnswers() {
    const answers = {
        q1: "8",
        q2: "Paris",
        q3: "JavaScript"
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultField = document.getElementById('quiz-result');

    for (const question in answers) {
        const userAnswer = form[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    const totalQuestions = Object.keys(answers).length;
    resultField.textContent = `You scored ${score} out of ${totalQuestions}. ${
        score === totalQuestions ? "Great job!" : "Keep practicing!"
    }`;
    resultField.style.color = score === totalQuestions ? "green" : "red";
}
