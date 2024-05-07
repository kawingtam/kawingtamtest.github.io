// Get elements
const homepageContainer = document.getElementById("homepage-container");
const usernameInput = document.getElementById("username");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const usernamePlaceholder = document.getElementById("username-placeholder");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");

// Quiz data
const quizData = [
    {
        question: "Who was the first American-born president?",
        options: ["George Washington", "John Adams", "Thomas Jefferson", "Martin Van Buren"],
        answer: "Martin Van Buren"
    },
    {
        question: "Which president made Christmas a national holiday?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "Ulysses S. Grant"
    },
    {
        question: "“Old Whitey” was the beloved horse of which president?",
        options: ["John F. Kennedy", "Theodore Roosevelt", "Andrew Jackson", "George Washington"],
        answer: "Zachary Taylor"
    },
    {
        question: "Which president was a classically trained pianist and played 4 other instruments?",
        options: ["Richard Nixon", "Bill Clinton", "Jimmy Carter", "Ronald Reagan"],
        answer: "Richard Nixon"
    },
    {
        question: "Who was the first and only U.S. president to serve non-consecutive terms?",
        options: ["Grover Cleveland", "James Madison", "Franklin D. Roosevelt", "Woodrow Wilson"],
        answer: "Grover Cleveland"
    },
    {
        question: "Which president signed the act creating the United States Marine Band?",
        options: ["John Adams", "Thomas Jefferson", "James Madison", "George Washington"],
        answer: "John Adams"
    },
    {
        question: "Which president and his wife attended Napoleon’s coronation at Notre Dame Cathedral?",
        options: ["James Monroe", "Andrew Jackson", "John Quincy Adams", "Martin Van Buren"],
        answer: "James Monroe"
    },
    {
        question: "Who was the first president to have written a biography of another president?",
        options: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Woodrow Wilson"],
        answer: "Herbert Hoover"
    },
    {
        question: "Which president had turned down offers to play professional football?",
        options: ["Gerald Ford", "Ronald Reagan", "Jimmy Carter", "Bill Clinton"],
        answer: "Gerald Ford"
    },
    {
        question: "Who was the first president to attend baseball’s opening day and throw the ceremonial first pitch?",
        options: ["William Howard Taft", "Teddy Roosevelt", "Woodrow Wilson", "Franklin D. Roosevelt"],
        answer: "William Howard Taft"
    },
    {
        question: "Which president and his wife received a Siamese cat as a gift from the American consul of Bangkok?",
        options: ["Rutherford B. Hayes", "James Garfield", "Andrew Johnson", "Chester A. Arthur"],
        answer: "Rutherford B. Hayes"
    },
    {
        question: "Which president was often mocked in the press for his unkempt appearance?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "Andrew Jackson", "Ulysses S. Grant"],
        answer: "Abraham Lincoln"
    },
    {
        question: "Which president hired Louis C. Tiffany—first design director of Tiffany and Co.—for a massive renovation of the White House and its private chambers?",
        options: ["Chester A. Arthur", "James Buchanan", "John Tyler", "Franklin Pierce"],
        answer: "Chester A. Arthur"
    },
    {
        question: "Though three presidents (Adams, Jefferson, and Monroe) died on the 4th of July, which president was the only president to have been born on that date?",
        options: ["Calvin Coolidge", "Warren G. Harding", "Herbert Hoover", "Thomas Jefferson"],
        answer: "Calvin Coolidge"
    },
    {
        question: "Which president and his wife met in the fifth grade, were high school sweethearts, but did not marry until their mid-thirties?",
        options: ["Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson"],
        answer: "Harry S. Truman"
    },
    {
        question: "Which president hated his painted portrait so much that he eventually burned it?",
        options: ["Theodore Roosevelt", "James Buchanan", "Woodrow Wilson", "Andrew Johnson"],
        answer: "Theodore Roosevelt"
    },
    {
        question: "Which president put up the first Christmas tree in the White House?",
        options: ["Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt"],
        answer: "Benjamin Harrison"
    },
    {
        question: "Which president donated all of his presidential salary (and his congressional salary before that) to charity?",
        options: ["John F. Kennedy", "Lyndon B. Johnson", "Herbert Hoover", "Franklin D. Roosevelt"],
        answer: "John F. Kennedy"
    },
    {
        question: "Which president and his wife hold the record for longest married first couple?",
        options: ["Jimmy Carter", "Ronald Reagan", "George H.W. Bush", "Bill Clinton"],
        answer: "Jimmy Carter"
    },
    {
        question: "Who was the first president to ride in a car to his inauguration?",
        options: ["Warren G. Harding", "William Howard Taft", "Woodrow Wilson", "Theodore Roosevelt"],
        answer: "Warren G. Harding"
    }
];

// Variable to track current question and score
let currentQuestion = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    const username = usernameInput.value.trim();
    if (username !== "") {
        // Store username in localStorage
        localStorage.setItem("username", username);
        // Hide homepage
        homepageContainer.style.display = "none";
        // Show quiz
        quizContainer.style.display = "block";
        // Update username placeholder
        usernamePlaceholder.textContent = username;
        // Load first question
        loadQuestion();
    } else {
        alert("Please enter your name to start the quiz.");
    }
}

// Function to load question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.classList.add("option-btn");
        optionElement.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionElement);
    });
}

// Function to check answer
function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show result
function showResult() {
    quizContainer.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
}

// Event listener for start button click
startButton.addEventListener("click", startQuiz);
