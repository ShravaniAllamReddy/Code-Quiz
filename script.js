
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
// quizEl.innerHTML = "<p>Hello World</p>";
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


function startQuiz(event) {
    event.preventDefault();
    quizEl.style.display = "block";
    mainEl.style.display = "none";
}


let index = 0;
let currentQuestion = questionAnswers[0];
nextQuestion();


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

    }
}

// button1.addEventListener("click", function (event) {
//     event.preventDefault();

//     if (button1.textContent === currentQuestion.correctAnswer) {

//         alert("correct");
//     }
//     else {
//         alert("wrong");
//     } 
//     index++;
//     nextQuestion();
// });

// button2.addEventListener("click", function (event) {
//     event.preventDefault();

//     if (button2.textContent === currentQuestion.correctAnswer) {

//         alert("correct");
//     }
//     else {
//         alert("wrong");
//     }

//     index++;
//     nextQuestion();
// });

// button3.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (button3.textContent === currentQuestion.correctAnswer) {

//         alert("correct");
//     }
//     else {
//         alert("wrong");
//     }

//     index++;
//     console.log(index);
//     nextQuestion();
// });

// button4.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (button4.textContent === currentQuestion.correctAnswer) {

//         // let pEl = document.createElement("p");
//         // pEl.textContent = "Correct Answer";
//         // quizEl.appendChild(pEl);

//         alert("correct");
//     }
//     else {
//         alert("wrong");
//     }

//     index++;
//     console.log(index);
//     nextQuestion();
// });

buttonEl.addEventListener("click", function (event) {
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
    }, 2000)

});


startEl.addEventListener("click", startQuiz);
startEl.addEventListener("click", startTimer);