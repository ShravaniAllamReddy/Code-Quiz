
const timeEl = document.querySelector(".time");
const questionEl = document.querySelector("#question");
const button1El = document.querySelector("#button1");
const button2El = document.querySelector("#button2");
const button3El = document.querySelector("#button3");
const button4El = document.querySelector("#button4");
const quizEl = document.querySelector("#quiz");
const mainEl = document.querySelector("#main");
const startEl = document.querySelector("#start");

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
        question: "How to write an IF statement in JavaScript?",
        answers: [
            "if(i==5)",
            "if i=5 then",
            "if i=5",
            "if i==5 then"
        ],
        correctAnswer: "if(i==5)"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: [
            "Angular",
            "jQuery",
            "RequireJS",
            "ESLint"
        ],
        correctAnswer: "ESLint"
    }
];


let secondsLeft = 60;

function startTimer() {
    // Create the countdown timer.
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);//cancel the timer 

        }

    }, 1000);

}

startTimer();


function startQuiz(event) {
    event.preventDefault();
    quizEl.style.display = "block";
    mainEl.style.display = "none";
}



// for(let i = 0 ; i < questions.length ; i++){
let currentQuestion = questionAnswers[0];

questionEl.textContent = currentQuestion.question;
button1El.textContent = currentQuestion.answers[0];
button2El.textContent = currentQuestion.answers[1];
button3El.textContent = currentQuestion.answers[2];
button4El.textContent = currentQuestion.answers[3];




startEl.addEventListener("click", startQuiz);