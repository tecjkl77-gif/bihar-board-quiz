const questions = [
    {
        question: "Bihar Board 10th ka paper kaun se mahine me hota hai?",
        options: ["January", "March", "February", "April", "December"],
        answer: 2
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("result").innerText = "Time's up!";
            showNextBtn();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timer);
    startTimer();

    document.getElementById("result").innerText = "";
    document.getElementById("next-btn").style.display = "none";

    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    q.options.forEach((opt, idx) => {
        document.getElementById("opt" + idx).innerText = opt;
    });
}

function checkAnswer(selected) {
    clearInterval(timer);
    const correct = questions[currentQuestion].answer;
    const resultEl = document.getElementById("result");
    if (selected === correct) {
        resultEl.innerText = "Correct!";
        resultEl.style.color = "green";
        score++;
    } else {
        resultEl.innerText = "Wrong!";
        resultEl.style.color = "red";
    }
    showNextBtn();
}

function showNextBtn() {
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `<h3>Quiz Complete!</h3><p>Your Score is ${score} / ${questions.length}</p>`;
    }
}

window.onload = loadQuestion;
