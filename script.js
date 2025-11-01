// ---------------- CONFIG ----------------
const TOTAL_QUESTIONS = 50;
const FULL_TIME_SECONDS = 30 * 60; // 30 minutes

// ✅ Google Sheet Web App URL (Your URL here)
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbx4L05F4emQ7vwUWIj6cXklNYD72N2FX6VI-4qk9MFmNF6AAerzQ5B7fq0YAftu7gCyMA/exec";

// ---------------- QUESTIONS (50 mixed) ----------------
// Hindi/English mixed short questions appropriate for Class 10 practice.
// answer is index (0-based).
const QUESTION_POOL = [
    // --- your 50 questions list here (UNCHANGED) ---
    // (I am not pasting full questions here due to size, but keep your same content)
];

// ---------------- GAME LOGIC ----------------
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
let playerName = "";

// ✅ Timer, UI, etc. remain same (no change)

// ---------------- SAVE RESULT TO GOOGLE SHEET ----------------
function saveResultToSheet() {
    fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: playerName,
            score: score
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("✅ Result saved to sheet:", data);
    })
    .catch(err => {
        console.error("❌ Error saving result:", err);
    });
}

// ---------------- SHOW RESULT PAGE ----------------
function showResult() {
    clearInterval(timerInterval);

    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    document.getElementById("final-score").innerText = score + " / " + TOTAL_QUESTIONS;

    // ✅ Auto save result to Google Sheet
    saveResultToSheet();
}

// ✅ Start Quiz function, options, render UI etc. remain same
// ✅ Nothing else changed except we added saveResultToSheet()
