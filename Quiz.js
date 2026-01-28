const fragen = [
    {
        frage: "In welchem Land ist Einschlafen am Arbeitsplatz ein Kompliment?",
        antworten: ["Japan", "USA", "Italien"],
        richtig: 0
    },
    {
        frage: "In welchem Land dürfen Ampeln Fußgängern sagen, \"Handy runter!\"?",
        antworten: ["Japan", "USA", "Schweden"],
        richtig: 2
    },
    {
        frage: "In welchem Land gilt der Daumen hoch als Beleidigung?",
        antworten: ["Australien", "Griechenland", "Brasilien"],
        richtig: 1
    }
];

let aktuelleFrage = 0;

const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const answerButtons = document.querySelectorAll(".answer");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    quiz.style.display = "block";
    zeigeFrage();
});

function zeigeFrage() {
    document.getElementById("frage").textContent =
        fragen[aktuelleFrage].frage;

    answerButtons.forEach((button, index) => {
        button.textContent = fragen[aktuelleFrage].antworten[index];
    });

    document.getElementById("ausgabe").textContent = "";
}

function antwort(index) {
    const ausgabe = document.getElementById("ausgabe");

    if (index === fragen[aktuelleFrage].richtig) {
        ausgabe.textContent = "✅ Richtig!";
    } else {
        ausgabe.textContent = "❌ Falsch!";
    }

    aktuelleFrage++;

    if (aktuelleFrage < fragen.length) {
        setTimeout(zeigeFrage, 1000);
    } else {
        ausgabe.textContent = "🎉 Quiz beendet Griechenland war richtig!";
    }
}

zeigeFrage(); // Starte das Quiz mit der ersten Frage
