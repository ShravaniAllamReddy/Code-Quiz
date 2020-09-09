
const timeEl = document.querySelector(".time");
const questionEl = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const quizEl = document.querySelector("#quiz");
const mainEl = document.querySelector("#main");
const startBtn = document.querySelector("#start");
const buttonEl = document.querySelector("#button-container");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const scores = document.querySelector("#scores");
const finalscore = document.querySelector("#finalscore");
const initials = document.querySelector("#initials");
const submitbtn = document.querySelector("#submitbtn");
const highscores = document.querySelector("#highscores");
const scorelist = document.querySelector("#scorelist");
const restartbtn = document.querySelector("#restartbtn");
const clear = document.querySelector("#clear");
const highscorespage = document.querySelector("#highscorespage");

// Array of questions,answers and correct answers
const questionAnswers = [
    {
        question: "1.Inside which HTML element do we put the JavaScript?",
        answers: [
            "<script>",
            "<scripting>",
            "javascript",
            "<js>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "2.Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
        answers: [
            "indexOf()",
            "join()",
            "lastIndexOf()",
            "map()"
        ],
        correctAnswer: "lastIndexOf()"
    },
    {
        question: "3.Which of the following function of String object returns the primitive value of the specified object.",
        answers: [
            "toLocaleUpperCase()",
            "toUpperCase()",
            "toString()",
            "valueOf()"
        ],
        correctAnswer: "valueOf()"
    },
    {
        question: "4.How can you get the type of arguments passed to a function?",
        answers: [
            "using typeof operator",
            "using getType function",
            "Both of the above",
            "None of the above"
        ],
        correctAnswer: "using typeof operator"
    },
    {
        question: "5.Which of the following function of String object extracts a section of a string and returns a new string?",
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
let timerInterval;
let currentQuestion = questionAnswers[0];
let currentuser = initials.value;
const currentHighscore = [{
    name: currentuser,
    score: secondsLeft
}];


//function that creates the countdown timer 
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            viewScores();
        }

    }, 1000);
}

//displays scores page
function viewScores() {
    //cancels the timer 
    clearInterval(timerInterval);
    quizEl.style.display = "none";
    scores.style.display = "block";
    finalscore.textContent = "Your Final Score :" + secondsLeft;
}

//This function helps in displaying all the questions and answers 
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
        viewScores();
    }
}

//Function that checks if answer is correct or wrong and prints the necessary output
function questionGuess(event) {
    event.preventDefault();

    if (event.target.textContent === currentQuestion.correctAnswer) {
        correct.style.display = "block";
    }
    //when user answers question incorrectly,10seconds is subtracted from the clock
    else {
        wrong.style.display = "block";
        secondsLeft = secondsLeft - 10;
        timeEl.textContent = secondsLeft;
    }
    //Helps to navigate to next question 
    setTimeout(function () {
        index++;
        nextQuestion();
        correct.style.display = "none";
        wrong.style.display = "none";
    }, 500)

}


//Displays stored scores which includes current user and their score 
function displayHighscores() {
    let scores = JSON.parse(localStorage.getItem("savedHighscore")) || [];
    for (let i = 0; i < scores.length; i++) {
        let li = document.createElement("li");
        li.textContent = scores[i].name + "-" + scores[i].score;
        scorelist.appendChild(li);
    }
}

//Once we click on submit button,this function stores currentuser and their score in localstorage
submitbtn.addEventListener("click", function () {
    event.preventDefault();
    if (initials.value === "") {
        alert("Please Enter your name");
    }
    else {
        let currentuser = initials.value;
        //JSON.parse converts JSON string to object
        let savedHighscore = JSON.parse(localStorage.getItem("savedHighscore")) || [];
        // console.log(savedHighscore);
        highscores.style.display = "block";
        scores.style.display = "none";
        savedHighscore.push({
            name: currentuser,
            score: secondsLeft
        });
        //JSON.stringify converts object to string
        localStorage.setItem("savedHighscore", JSON.stringify(savedHighscore));
        // console.log(JSON.stringify(savedHighscore));
        displayHighscores();
    }

});

nextQuestion();

buttonEl.addEventListener("click", questionGuess);

startBtn.addEventListener("click", function () {
    quizEl.style.display = "block";
    mainEl.style.display = "none";
});

startBtn.addEventListener("click", startTimer);


//to display all the scores of the users
highscorespage.addEventListener("click", function () {
    displayHighscores();
    quizEl.style.display = "none";
    highscores.style.display = "block";
    mainEl.style.display = "none";
});



//linking to index.html page to restart the quiz
restartbtn.addEventListener("click", function (event) {
    window.location.href = "index.html";

});

//clears the user initials and score from the local storage
clear.addEventListener("click", function () {
    localStorage.clear();
    scorelist.style.display = "none";

});

