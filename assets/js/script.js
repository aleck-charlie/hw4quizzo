// variables ////////////////////////////////

let startBtn = document.getElementById("start");
let submitBtn = document.getElementById("submit");
let questionAsk = document.getElementById("question-ask");
let answersDiv = document.getElementById("answers-div");
let questionIndex = 0;
let point = 0;
let timer = 80;
let countDown;
let timerEl = document.getElementById("timerEl");
let enterIntials = document.getElementById("enterIntials");

// functions ////////////////////////////////
function timerCountdown() {
    // setInterval has to be saved to variable- (callback function, how often to trigger callback function-- milliseconds)
    countDown = setInterval(function(){
    timerEl.textContent = timer;
    timer -= 1;
    if (timer === 0) endGame()
    }, 1000); // call back function will decrease timer by 1
    // set up clear interval
}

function startQuiz() {
    timerCountdown();
    getQuestion();
}

function getQuestion() {
    let currentQuestion = question[questionIndex];
    questionAsk.textContent = currentQuestion.ask;
    answersDiv.innerHTML = " ";
    currentQuestion.answers.forEach(answer => {
    let answerBtn = document.createElement("button");
    answerBtn.textContent = answer;
    answerBtn.setAttribute("value", answer);
    answersDiv.appendChild(answerBtn);
    answerBtn.addEventListener("click", checkAnswer);
    });
}

function checkAnswer() {
    if (this.value === question[questionIndex].correctAnswer) {
        point++;
        alert("nice!");
        questionIndex++; 
        if (questionIndex === question.length){
            endGame();
        }
        getQuestion();
    } else {
        point--;
        alert("try again!");
        timer -= 10;
    };
    // check answer
    // incorrect deduct points
    // set score
    endGame();
}


function endGame() {
    clearInterval(countdown);
    // set their score
    // clear out timer
    //show end screen
}

function saveHighScore () {
    // prompt for initials save to variable
   //target button when click save high score function
   // save score to local storage
   let intials = enterIntials.value;
   localStorage.setItem(intials, point);
   console.log("hello", intials, point);
}

startBtn.addEventListener("click", startQuiz); 
submitBtn.addEventListener("click", saveHighScore);
