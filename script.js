// ------------------ CONFIG ------------------
const TOTAL_QUESTIONS = 50;
const FULL_TIME_SECONDS = 30 * 60; // 30 minutes

// ------------------ QUESTIONS (50 mixed) ------------------
// Hindi/English mixed short questions appropriate for Class 10 practice.
// answer is index (0-based).
const QUESTION_POOL = [
  { question: "Bihar ka rajdhani kaun si city hai?", options:["Patna","Gaya","Bhagalpur","Muzaffarpur","Darbhanga"], answer:0 },
  { question: "India ka rashtriya pashu kya hai?", options:["Elephant","Lion","Tiger","Peacock","Cow"], answer:2 },
  { question: "Speed = Distance / ___ ?", options:["Time","Power","Force","Mass","Energy"], answer:0 },
  { question: "Water ka chemical formula kya hai?", options:["H2O","O2","CO2","H2","HO2"], answer:0 },
  { question: "World War II kis saal khatam hua tha?", options:["1945","1939","1918","1950","1942"], answer:0 },
  { question: "Atomic number of Carbon is?", options:["6","12","14","8","4"], answer:0 },
  { question: "Photosynthesis ka primary pigment kaun sa hai?", options:["Chlorophyll","Carotene","Xanthophyll","Hemoglobin","Myoglobin"], answer:0 },
  { question: "Simple Interest formula?", options:["(P×R×T)/100","P×R×T","(P+R)/T","(P−R)/T","P/(R×T)"], answer:0 },
  { question: "Bhugol: Tropic of Cancer India me kis rajya se guzarta hai?", options:["Madhya Pradesh","Rajasthan","Gujarat","Bihar","Jharkhand"], answer:1 },
  { question: "Newton ka second law kya kehta hai?", options:["F = ma","For every action, reaction","Objects in motion remain in motion","Energy is conserved","None"], answer:0 },

  { question: "Humare digestive system ka longest part kaun sa hai?", options:["Small intestine","Large intestine","Stomach","Esophagus","Rectum"], answer:0 },
  { question: "Sanskrit: 'Guru' ka arth kya hota hai?", options:["Teacher","Student","Friend","Book","Place"], answer:0 },
  { question: "Hindi: 'सौभाग्य' का समानार्थी शब्द कौन सा है?", options:["भाग्यशाली","नसीब","दुर्भाग्य","संगति","विपत्ति"], answer:1 },
  { question: "Chemistry: pH value 7 ko kya kehte hain?", options:["Neutral","Acidic","Basic","Strong Acid","Strong Base"], answer:0 },
  { question: "Math: 15% of 200 = ?", options:["30","20","15","25","35"], answer:0 },
  { question: "Biology: Human heart kitne chambers ka hota hai?", options:["4","3","2","5","6"], answer:0 },
  { question: "History: India kab azad hua tha?", options:["1947","1950","1945","1930","1942"], answer:0 },
  { question: "Geography: Longest river in India?", options:["Ganga","Yamuna","Godavari","Narmada","Brahmaputra"], answer:0 },
  { question: "English: Synonym of 'Quick'?", options:["Fast","Slow","Weak","Silent","Late"], answer:0 },
  { question: "Math: LCM of 12 and 18?", options:["36","6","72","54","24"], answer:0 },

  { question: "Physics: Unit of Force?", options:["Newton","Joule","Watt","Pascal","Volt"], answer:0 },
  { question: "Economics: GDP kya measure karta hai?", options:["Total production","Population","Exports only","Imports only","Tax revenue"], answer:0 },
  { question: "Civics: Lok Sabha ka term kitna hota hai?", options:["5 years","6 years","4 years","3 years","10 years"], answer:0 },
  { question: "Mathematics: 7 × 8 = ?", options:["56","54","48","49","63"], answer:0 },
  { question: "English: Opposite of 'Always'?", options:["Never","Often","Sometimes","Seldom","Usually"], answer:0 },
  { question: "Science: Sound travels fastest in which medium?", options:["Solid","Liquid","Gas","Vacuum","Plasma"], answer:0 },
  { question: "Biology: Blood cells that carry oxygen?", options:["Red blood cells","White blood cells","Platelets","Plasma cells","Stem cells"], answer:0 },
  { question: "Geography: Capital of India?", options:["New Delhi","Mumbai","Kolkata","Chennai","Bengaluru"], answer:0 },
  { question: "History: 'Quit India Movement' kis saal shuru hua?", options:["1942","1930","1919","1947","1920"], answer:0 },
  { question: "Math: Square root of 144?", options:["12","14","11","13","10"], answer:0 },

  { question: "Chemistry: NaCl is commonly known as?", options:["Salt","Sugar","Baking Soda","Vinegar","Lime"], answer:0 },
  { question: "Physics: Speed of light approximately (m/s)?", options:["3×10^8","3×10^6","3×10^5","1×10^8","9×10^8"], answer:0 },
  { question: "SST: UNO ka full form kya hai?", options:["United Nations Organization","Union of Nations Organization","United Nations Order","Universal Nations Organization","United Nation Observatory"], answer:0 },
  { question: "Hindi: 'अवसर' का अंग्रेज़ी शब्द?", options:["Opportunity","Chance","Moment","Occasion","Both A & B"], answer:0 },
  { question: "Math: If x + 5 = 12, x = ?", options:["7","6","8","5","12"], answer:0 },
  { question: "Science: Which gas is essential for respiration?", options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen","Helium"], answer:0 },
  { question: "History: First Prime Minister of India?", options:["Jawaharlal Nehru","Mahatma Gandhi","Sardar Patel","Subhash Chandra Bose","Lal Bahadur Shastri"], answer:0 },
  { question: "Geography: Which is an island state of India?", options:["Andaman & Nicobar","Punjab","Haryana","Rajasthan","Bihar"], answer:0 },
  { question: "English: 'She sings beautifully' — identify part of speech of 'beautifully'?", options:["Adverb","Adjective","Verb","Noun","Pronoun"], answer:0 },
  { question: "Math: Perimeter of square with side 5 = ?", options:["20","10","25","15","30"], answer:0 },

  { question: "Science: Plants make food by?", options:["Photosynthesis","Respiration","Digestion","Transpiration","Fermentation"], answer:0 },
  { question: "SST: Which mountain range is in northern India?", options:["Himalayas","Vindhya","Aravalli","Satpura","Nilgiri"], answer:0 },
  { question: "Math: 5^3 equals?", options:["125","15","25","75","100"], answer:0 },
  { question: "Biology: Which organ filters blood?", options:["Kidney","Liver","Lungs","Heart","Stomach"], answer:0 },
  { question: "Chemistry: Which is an acid?", options:["HCl","NaOH","KOH","CaO","MgO"], answer:0 },
  { question: "History: Who led Dandi March?", options:["Mahatma Gandhi","Jawaharlal Nehru","Subhash Bose","Bhagat Singh","Sardar Patel"], answer:0 },
  { question: "English: Choose correct article: '___ apple a day.'", options:["An","A","The","X","Some"], answer:0 },
  { question: "Math: If angles of triangle are 60°, 60°, third angle = ?", options:["60°","90°","80°","45°","30°"], answer:0 },
  { question: "Science: Evaporation is change from _____ to _____.", options:["Liquid to gas","Gas to liquid","Solid to liquid","Liquid to solid","Solid to gas"], answer:0 },
  { question: "Civics: Constitution of India adopted in which year?", options:["1950","1947","1952","1949","1960"], answer:0 }
];

// ------------------ UTILITIES ------------------
// deterministic shuffle using seed (date-based) so each day gives different order
function seedFromDate(d){
  // d = YYYY-MM-DD
  let parts = d.split('-').map(Number);
  return parts[0]*10000 + parts[1]*100 + parts[2];
}
function seededShuffle(array, seed){
  let a = array.slice();
  let random = mulberry32(seed);
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
// simple PRNG
function mulberry32(a){
  return function(){
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

// sound (beep)
function playTone(type){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    if(type==='correct'){ o.frequency.value = 880; g.gain.value = 0.05; }
    else if(type==='wrong'){ o.frequency.value = 220; g.gain.value = 0.05; }
    else if(type==='end'){ o.frequency.value = 440; g.gain.value = 0.04; }
    o.start(); setTimeout(()=>{ o.stop(); ctx.close(); }, 150);
  }catch(e){ /* ignore */ }
}

// ------------------ STATE ------------------
let quizQuestions = []; // today's ordered questions
let currentIndex = 0;
let score = 0;
let total = TOTAL_QUESTIONS;
let timeLeft = FULL_TIME_SECONDS;
let timerInterval = null;
let answered = false;

// DOM
const startBtn = document.getElementById('startBtn');
const welcome = document.getElementById('welcome');
const quiz = document.getElementById('quiz');
const questionText = document.getElementById('questionText');
const optionsDiv = document.getElementById('options');
const qnum = document.getElementById('qnum');
const progress = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const nextBtn = document.getElementById('nextBtn');
const endEarlyBtn = document.getElementById('endEarlyBtn');
const result = document.getElementById('result');
const resultSection = document.getElementById('result');
const scoreSummary = document.getElementById('scoreSummary');
const messageEl = document.getElementById('message');
const retryBtn = document.getElementById('retryBtn');
const homeBtn = document.getElementById('homeBtn');
const leaderboardList = document.getElementById('leaderboardList');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const saveNameInput = document.getElementById('saveName');
const leaderboardForm = document.getElementById('leaderboardForm');
const playerNameInput = document.getElementById('playerName');
const clearBoardBtn = document.getElementById('clearBoard');

// ------------------ DAILY SHUFFLE & PREP ------------------
function prepareQuizForToday(){
  const today = new Date();
  const y = today.getFullYear(), m = today.getMonth()+1, d = today.getDate();
  const datestr = `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  const seed = seedFromDate(datestr);
  const shuffled = seededShuffle(QUESTION_POOL, seed);
  // ensure we have at least TOTAL_QUESTIONS
  quizQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, shuffled.length));
  total = quizQuestions.length;
  progress.max = total;
}
prepareQuizForToday();

// ------------------ TIMER ------------------
function startTimer(){
  updateTimerDisplay();
  timerInterval = setInterval(()=>{
    timeLeft--;
    updateTimerDisplay();
    if(timeLeft <= 0){
      clearInterval(timerInterval);
      playTone('end');
      endQuiz();
    }
  },1000);
}
function updateTimerDisplay(){
  const mm = Math.floor(timeLeft/60);
  const ss = timeLeft%60;
  timerEl.textContent = `${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
}

// ------------------ RENDER QUESTION ------------------
function renderQuestion(){
  answered = false;
  nextBtn.classList.add('hidden');
  const q = quizQuestions[currentIndex];
  qnum.textContent = `Q ${currentIndex+1} / ${total}`;
  progress.value = currentIndex;
  questionText.textContent = q.question;
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx)=>{
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = ()=> selectOption(idx, btn);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(idx, btn){
  if(answered) return;
  answered = true;
  clearInterval(null); // nothing
  const correct = quizQuestions[currentIndex].answer;
  // disable all buttons
  Array.from(optionsDiv.children).forEach(b=> b.disabled = true);
  if(idx === correct){
    btn.classList.add('correct');
    score++;
    playTone('correct');
  } else {
    btn.classList.add('wrong');
    // highlight correct
    Array.from(optionsDiv.children).forEach((b,i)=>{
      if(i === correct) b.classList.add('correct');
    });
    playTone('wrong');
  }
  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', ()=>{
  currentIndex++;
  if(currentIndex < total){
    renderQuestion();
  } else {
    endQuiz();
  }
});

endEarlyBtn.addEventListener('click', ()=>{
  if(confirm('Kya aap quiz submit karna chahte hain?')) endQuiz();
});

// ------------------ START / END ------------------
startBtn.addEventListener('click', ()=>{
  const name = playerNameInput.value.trim();
  if(name) saveNameInput.value = name;
  welcome.classList.add('hidden');
  quiz.classList.remove('hidden');
  // reset state
  currentIndex = 0; score = 0; timeLeft = FULL_TIME_SECONDS;
  prepareQuizForToday();
  renderQuestion();
  startTimer();
});

function endQuiz(){
  // stop timer
  if(timerInterval) clearInterval(timerInterval);
  quiz.classList.add('hidden');
  // show result card
  document.getElementById('result').classList.remove('hidden');
  // fill summary
  const percent = Math.round((score/total)*100);
  scoreSummary.innerHTML = `Score: <strong>${score} / ${total}</strong> (${percent}%)`;
  let msg = '';
  if(percent >= 60){
    msg = `Shabash! <span style="font-size:22px">🎉</span> Aap pass hue. Keep practicing!`;
  } else if(percent >= 40){
    msg = `Achha try — thoda aur practice chahiye. <span style="font-size:20px">🙂</span>`;
  } else {
    msg = `Don't worry. Practice karo aur fir se koshish karo. <span style="font-size:20px">💪</span>`;
  }
  messageEl.innerHTML = msg;
  // show leaderboard form
  leaderboardForm.classList.remove('hidden');
  // show today's leaderboard
  renderLeaderboardForToday();
}

// retry same quiz (same day/order)
retryBtn.addEventListener('click', ()=>{
  document.getElementById('result').classList.add('hidden');
  quiz.classList.remove('hidden');
  currentIndex = 0; score = 0; timeLeft = FULL_TIME_SECONDS;
  renderQuestion();
  startTimer();
});

// home
homeBtn.addEventListener('click', ()=>{
  document.getElementById('result').classList.add('hidden');
  welcome.classList.remove('hidden');
});

// ------------------ LEADERBOARD (localStorage per day) ------------------
function todayKey(){
  const t = new Date();
  return `leaderboard-${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
}
function getLeaderboard(){
  const raw = localStorage.getItem(todayKey());
  return raw ? JSON.parse(raw) : [];
}
function saveLeaderboard(arr){
  localStorage.setItem(todayKey(), JSON.stringify(arr));
}

saveScoreBtn.addEventListener('click', ()=>{
  const name = saveNameInput.value.trim();
  if(!name){ alert('Please enter name to save score'); return; }
  const arr = getLeaderboard();
  arr.push({name, score, total, time: new Date().toISOString()});
  // sort desc
  arr.sort((a,b)=> (b.score/b.total) - (a.score/a.total));
  // keep top 50 to limit size
  const top = arr.slice(0,50);
  saveLeaderboard(top);
  renderLeaderboardForToday();
  alert('Score saved to today\'s leaderboard!');
});

function renderLeaderboardForToday(){
  const arr = getLeaderboard();
  leaderboardList.innerHTML = '';
  if(arr.length === 0){
    leaderboardList.innerHTML = '<li>No entries yet</li>';
    return;
  }
  arr.slice(0,10).forEach(item=>{
    const li = document.createElement('li');
    const percent = Math.round((item.score/item.total)*100);
    li.textContent = `${item.name} — ${item.score}/${item.total} (${percent}%)`;
    leaderboardList.appendChild(li);
  });
}

clearBoardBtn.addEventListener('click', ()=>{
  if(confirm('Clear today leaderboard?')){
    localStorage.removeItem(todayKey());
    renderLeaderboardForToday();
  }
});

// ------------------ ON LOAD ------------------
window.addEventListener('load', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  progress.value = 0;
  progress.max = total;
  // hide result initially
  document.getElementById('result').classList.add('hidden');
  // ensure welcome visible
  welcome.classList.remove('hidden');
});
