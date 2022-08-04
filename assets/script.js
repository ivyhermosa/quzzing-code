var questionTag = document.getElementById("question");
var choices = document.getElementById("choices");
const questionContainererer = document.querySelector("#container");
var currentQuestionIndex = 0;
var userScore = 0;
var userHighScore = 0;
var time = 30;
const query = document.querySelector("#query");
const highScore = document.querySelector("#highScore");
var container = document.querySelector(".start-container");
const scoreContainer = document.querySelector("#scoreContainer");
const questionContainer = document.querySelector("#questionContainer");
const timeContainer = document.querySelector(".timer-container");
const submitBtn = document.getElementById('submit-btn')

// var with arrays and objects for questions

var data = [
  {
    question: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
];

var answer = (value, answer) => {
  if (value === answer) {
    console.log("true");
    query.innerHTML = "Right";
    userScore++;
    currentQuestionIndex++;
    questions();
  } else {
    console.log("false");
    query.innerHTML = "Wrong";
    currentQuestionIndex++;
    questions();
  }
};

var startTime = () => {
  var timer = document.createElement("p");
  timer.textContent = time;
  timeContainer.append(timer);

  var settingTimer = setInterval(() => {
    time--;
    timer.textContent = time;
    console.log(currentQuestionIndex, data.length);

    if (time == 0 || currentQuestionIndex == data.length) {
      endQuiz()
      timer.textContent = 'Game Over!'
      clearInterval(settingTimer);
    }
  }, 1000);
};

var questions = () => {
  questionContainererer.style.display = "flex";
  scoreContainer.style.display = "none";

  if (currentQuestionIndex == data.length) {
    endQuiz()
    return
  } else {
    var currentQuestion = data[currentQuestionIndex];

    choices.innerHTML = "";
    questionTag.innerHTML = currentQuestion.question;

    container.style.display = "none";

    for (i in currentQuestion.choices) {
      choices.innerHTML += `<button onclick='answer("${currentQuestion.choices[i]}","${currentQuestion.answer}")' style="margin:10px;">${currentQuestion.choices[i]}</button>`;
    }
  }
};

// questions();

function endQuiz() {
  container.style.display = "block";

  questionContainer.style.display = "none";

  scoreContainer.style.display = "block";
  
}

document.querySelector(".start-btn").addEventListener("click", (event) => {
  questions();
  startTime();
  questionContainer.style.display = "flex";
});

submitBtn.addEventListener('click', function() {
  const userName = document.getElementById('name-input').value

  if (userName === '') {
    return
  }

  var storage = JSON.parse(localStorage.getItem('highscores'))
  if ( storage === null) {
    storage = []
  }
  storage.push({
    name: userName,
    highscore: userScore
  })

  localStorage.setItem('highscores', JSON.stringify(storage))
  window.location.href = 'highscores.html'
})
