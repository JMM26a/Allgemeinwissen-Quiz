// ===== DESIGN =====
document.body.style.fontFamily = "Verdana, sans-serif";
document.body.style.background = "linear-gradient(135deg, #ffecd2, #fcb69f)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

const quizBox = document.getElementById("quiz");
quizBox.style.backgroundColor = "#ffffff";
quizBox.style.padding = "30px";
quizBox.style.borderRadius = "15px";
quizBox.style.width = "360px";
quizBox.style.textAlign = "center";
quizBox.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";

// Überschrift & Beschreibung
document.querySelector("h1").style.marginBottom = "10px";
document.getElementById("description").style.color = "#555";
document.getElementById("description").style.fontSize = "14px";

// ===== ELEMENTE =====
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const info = document.getElementById("info");
const feedback = document.getElementById("feedback");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const nextQuiz = document.getElementById("nextQuiz");

restartBtn.style.display = "none";
nextQuiz.style.display = "none";

// Buttons stylen
function styleMainButton(btn, color) {
  btn.style.border = "none";
  btn.style.borderRadius = "20px";
  btn.style.padding = "8px 16px";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = color;
  btn.style.color = "#333";
  btn.style.fontWeight = "bold";
}

styleMainButton(startBtn, "#fcb69f");
styleMainButton(restartBtn, "#fcb69f");

const nextBtn = nextQuiz.querySelector("button");
styleMainButton(nextBtn, "#ff9a76");

// ===== QUIZ-FRAGEN (ESSEN) =====
const quiz = [
  {
    q: "Welches Vitamin ist besonders häufig in Zitrusfrüchten enthalten?",
    a: ["Vitamin A", "Vitamin C", "Vitamin D"],
    correct: 1
  },
  {
    q: "Welches Lebensmittel liefert am meisten Eiweiß?",
    a: ["Reis", "Ei", "Apfel"],
    correct: 1
  },
  {
    q: "Aus welchem Land stammt Sushi ursprünglich?",
    a: ["China", "Japan", "Thailand"],
    correct: 1
  }
];

let index = 0;
let points = 0;

// ===== START =====
startBtn.onclick = function () {
  startBtn.style.display = "none";
  loadQuestion();
};

// ===== HILFSFUNKTION =====
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== QUIZ-FUNKTIONEN =====
function loadQuestion() {
  feedback.textContent = "";
  question.textContent = quiz[index].q;
  answers.innerHTML = "";
  info.textContent = "Punkte: " + points;

  let options = quiz[index].a.map((text, i) => ({
    text: text,
    correct: i === quiz[index].correct
  }));

  shuffleArray(options);

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.style.display = "block";
    btn.style.margin = "6px auto";
    btn.style.padding = "6px 12px";
    btn.style.border = "1px solid #ddd";
    btn.style.borderRadius = "12px";
    btn.style.backgroundColor = "#fafafa";
    btn.style.cursor = "pointer";

    btn.onmouseover = function () {
      btn.style.backgroundColor = "#ffe0d2";
    };

    btn.onmouseout = function () {
      btn.style.backgroundColor = "#fafafa";
    };

    btn.onclick = function () {
      checkAnswer(option.correct);
    };

    answers.appendChild(btn);
  });
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    points++;
    feedback.textContent = "Richtig ✅";
  } else {
    feedback.textContent = "Falsch ❌";
  }

  index++;

  setTimeout(() => {
    if (index < quiz.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 800);
}

function endQuiz() {
  question.textContent = "Quiz beendet 🍽️";
  answers.innerHTML = "";
  feedback.textContent = "";
  info.textContent = "Ergebnis: " + points + " von " + quiz.length;

  restartBtn.style.display = "inline";
  nextQuiz.style.display = "inline";
}

restartBtn.onclick = function () {
  index = 0;
  points = 0;
  restartBtn.style.display = "none";
  nextQuiz.style.display = "none";
  loadQuestion();
};

