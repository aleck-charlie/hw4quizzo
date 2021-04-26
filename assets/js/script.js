// variables ////////////////////////////////

let startBtn = document.getElementById("start");
let saveScore = document.getElementById("save-score");
let questionAsk = document.getElementById("question-ask");
let answersDiv = document.getElementById("answers-div");
let questionIndex = 0;

// functions ////////////////////////////////
function startQuiz() {
    //start timer
    // find dom element to show question
    getQuestion();
}

function getQuestion() {
    // get current question
    let currentQuestion = question[questionIndex];
    // show current question
    questionAsk.textContent = currentQuestion.ask;
    // loop show possible answers (buttons)
    currentQuestion.answers.forEach(answer => {
    let answerBtn = document.createElement("button");
    answerBtn.textContent = answer;
    answerBtn.setAttribute("value", answer);
    answersDiv.appendChild(answerBtn);
    // add event listener for each button created
    answerBtn.addEventListener("click", checkAnswer);
    });

    // add event listener for each button created
    //checkAnswer();
}

function checkAnswer() {
    if (this.value === question[questionIndex].correctAnswer) {

        questionIndex++;
        getQuestion();
    } else {
        console.log("incorrect")
    }
    // check answer
    // incorrect deduct points
    // set score
    // get next question
    // getQuestion();
    // if questions.length
    endGame();
}

function endGame() {
    // set their score
    // clear out timer
    //show end screen
    // add initals 
}
// event listeners //////////////////////////
function saveHighScore () {
    // prompt for initials save to variable
    // save score to local storage
}

startBtn.addEventListener("click", startQuiz); {
    // v used for when questions were coded in html V 
    //question.style.display = "block";
    // hide start button on click 
    startQuiz.style.display = "none"; 
};
// saveScore.addEventListener("click", saveHighScore);

// button click event listeners ///////////////////


a.addEventListener('click', function () {
    if (a.textContent === questionArray[0].correctAnswer) {
        console.log("very correct!");
    }
    
})

b.addEventListener('click', function () {
    if(b.textContent === questionArray[0].correctAnswer) {
        console.log("very correct again!")
    } else {
        console.log("nah dude");
    }
    
})

c.addEventListener('click', function () {
    console.log(c.textContent)
    
})

d.addEventListener('click', function () {
    console.log(d.textContent)
    
})