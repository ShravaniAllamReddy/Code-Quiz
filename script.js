
const timeEl = document.querySelector(".time");
const questionEl = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const quizEl = document.querySelector("#quiz");
const mainEl = document.querySelector("#main");
const startEl = document.querySelector("#start");
const buttonEl = document.querySelector("#button-container");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const scores = document.querySelector("#scores");
const finalscore = document.querySelector("#finalscore");
const initials = document.querySelector("#initials");
const scorepage = document.querySelector("#scorepage");
const highscores = document.querySelector("#highscores");
const userinitials = document.querySelector("#user-initials");
const userscore = document.querySelector("#user-score");

const questionAnswers = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<scripting>",
            "javascript",
            "<js>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
        answers: [
            "indexOf()",
            "join()",
            "lastIndexOf()",
            "map()"
        ],
        correctAnswer: "lastIndexOf()"
    },
    {
        question: "Which of the following function of String object returns the primitive value of the specified object.",
        answers: [
            "toLocaleUpperCase()",
            "toUpperCase()",
            "toString()",
            "valueOf()"
        ],
        correctAnswer: "valueOf()"
    },
    {
        question: "How can you get the type of arguments passed to a function?",
        answers: [
            "using typeof operator",
            "using getType function",
            "Both of the above",
            "None of the above"
        ],
        correctAnswer: "using typeof operator"
    },
    {
        question: "Which of the following function of String object extracts a section of a string and returns a new string?",
        answers: [
            "slice()",
            "split()",
            "search()",
            "replace()"
        ],
        correctAnswer: "slice()"

    }
];

let secondsLeft = 60;
let score = 0;
let index = 0;
let currentQuestion = questionAnswers[0];

function startTimer() {
    // Create the countdown timer.
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        localStorage.setItem("userscore", secondsLeft);
        finalscore.textContent = "Your Final Score :" + secondsLeft;
        // console.log(finalscore);
        if (secondsLeft === 0 || index === questionAnswers.length - 1) {
            clearInterval(timerInterval);//cancel the timer 
            setTimeout(viewScores(), 500);
        }

    }, 1000);
}


function startQuiz(event) {
    event.preventDefault();
    quizEl.style.display = "block";
    mainEl.style.display = "none";
}


function nextQuestion() {
    if (index < questionAnswers.length) {
        currentQuestion = questionAnswers[index];
        questionEl.textContent = currentQuestion.question;
        button1.textContent = currentQuestion.answers[0];
        button2.textContent = currentQuestion.answers[1];
        button3.textContent = currentQuestion.answers[2];
        button4.textContent = currentQuestion.answers[3];
    }
    else {
        //local storage -optional
        //view highscores
        secondsLeft = 0;
        quizEl.style.display = "none";
        scores.style.display = "block";

    }
}


function viewScores(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.textContent);

    if (event.target.textContent === currentQuestion.correctAnswer) {
        correct.style.display = "block";
    }
    else {
        wrong.style.display = "block";
        secondsLeft = secondsLeft - 10;
        timeEl.textContent = secondsLeft;
    }

    setTimeout(function () {
        index++;
        nextQuestion();
        correct.style.display = "none";
        wrong.style.display = "none";
    }, 1000)

}

function saveInitials() {
    let initials = localStorage.getItem("storeInitials");
    let score = localStorage.getItem("userscore");
    userinitials.textContent = initials;
    userscore.textContent = score;


}

scorepage.addEventListener("click", function () {
    event.preventDefault();
    let storeInitials = initials.value;

    console.log(storeInitials);

    localStorage.setItem("storeInitials", storeInitials);

    highscores.style.display = "block";
    scores.style.display = "none";
    saveInitials();


});

nextQuestion();
buttonEl.addEventListener("click", viewScores);
startEl.addEventListener("click", startQuiz);
startEl.addEventListener("click", startTimer);