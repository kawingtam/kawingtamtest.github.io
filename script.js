const questions = [
    {
        question: "Who was the first American-born president?",
        options: ["Martin Van Buren", "George Washington", "John Adams", "Thomas Jefferson"],
        answer: "Martin Van Buren"
    },
    // Add other questions here...
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

const homeContainer = document.getElementById("home-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const usernameInput = document.getElementById("username");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const resultText = document.getElementById("result-text");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectRandomQuestions() {
    const selectedQuestions = [];
    shuffleArray(questions);
    for (let i = 0; i < 5; i++) {
        selectedQuestions.push(questions[i]);
    }
    return selectedQuestions;
}

function displayQuestion(question, index) {
    questionText.textContent = `${index + 1}. ${question.question}`;
    optionsList.innerHTML = "";
    question.options.forEach((option, i) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectOption(option));
        optionsList.appendChild(li);
    });
}

function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = selectRandomQuestions();
    displayQuestion(selectedQuestions[currentQuestionIndex], currentQuestionIndex);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion(selectedQuestions[currentQuestionIndex], currentQuestionIndex);
    } else {
        showResult();
    }
}

function selectOption(selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = `Your score: ${score} out of ${selectedQuestions.length}`;
}

function restartQuiz() {
    resultContainer.style.display = "none";
    homeContainer.style.display = "block";
    usernameInput.value = "";
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
