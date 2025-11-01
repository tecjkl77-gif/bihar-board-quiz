// ---------------- CONFIG ----------------
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx4L05F4emQ7vwUWIj6cXklNYD72N2FX6VI-4qk9MFmNF6AAerzQ5B7fq0YAftu7gCyMA/exec"; // your apps script URL
const TOTAL_QUESTIONS = 50;
const FULL_TIME_SECONDS = 30 * 60; // 30 minutes

// ---------------- QUESTION POOL (50) ----------------
const QUESTION_POOL = [
  // Hindi - 10
  { question: "‘विद्या’ का सही पर्यायवाची शब्द कौन सा है?", options: ["ज्ञान","मोक्ष","आशा","अधिकार"], answer:0 },
  { question: "‘बंदर क्या जाने अदरक का स्वाद’ किसका उदाहरण है?", options: ["लोकोक्ति","मुहावरा","अलंकार","समास"], answer:0 },
  { question: "‘राम राम जपना, पराया माल अपना’ यह क्या है?", options: ["दोहा","कहावत","भजन","गीत"], answer:1 },
  { question: "‘गागर में सागर’ किस अलंकार का उदाहरण है?", options: ["उपमा","यमक","व्यंजना","रूपक"], answer:2 },
  { question: "‘अतिथि’ शब्द में कौन सा उपसर्ग है?", options: ["अति","सु","प्रति","अन"], answer:0 },
  { question: "‘कबीर’ किस भाषा के कवि थे?", options: ["बृज","अवधी","खड़ी बोली","संत भाषा"], answer:3 },
  { question: "नीचे दिए गए में से कौन सा विलोम शब्द है?", options: ["दीपक - अंधेरा","सुख - दुख","रात - तारा","जल - भूमि"], answer:1 },
  { question: "‘वह शेर की तरह बहादुर है’ में कौन सा अलंकार है?", options: ["उपमा","रूपक","अनुप्रास","यमक"], answer:0 },
  { question: "‘रामचरितमानस’ के रचयिता कौन हैं?", options: ["तुलसीदास","कबीर","सूरदास","महादेवी वर्मा"], answer:0 },
  { question: "‘साँप और सीढ़ी’ किस प्रकार का खेल है?", options: ["इनडोर","आउटडोर","पारंपरिक","टेक्नोलॉजी"], answer:2 },

  // Maths - 10
  { question: "यदि a = 5, b = 3 हो, तो (a + b)² का मान क्या होगा?", options: ["40","64","81","49"], answer:3 },
  { question: "π का मान लगभग कितना होता है?", options: ["2.14","3.14","3.41","2.41"], answer:1 },
  { question: "त्रिभुज के कोणों का योगफल कितना होता है?", options: ["180°","360°","90°","270°"], answer:0 },
  { question: "√144 का मान क्या है?", options: ["10","11","12","13"], answer:2 },
  { question: "8 का वर्गमूल क्या होगा?", options: ["2√2","√4","2","4"], answer:0 },
  { question: "1 घन मीटर = कितने लीटर होता है?", options: ["100","1000","10","1"], answer:1 },
  { question: "0 से 1 के बीच कितने परिमेय संख्याएँ होती हैं?", options: ["1","10","असंख्य","100"], answer:2 },
  { question: "त्रिज्या 7 सेमी वाले वृत्त का क्षेत्रफल कितना होगा? (π = 22/7)", options: ["154 से.मी²","44 से.मी²","77 से.मी²","100 से.मी²"], answer:0 },
  { question: "तीन संख्याओं का औसत 15 है। कुल योग कितना होगा?", options: ["30","45","60","35"], answer:1 },
  { question: "सरल ब्याज का सूत्र क्या है?", options: ["PTR/100","P+T+R","P/T × R","PRT - 100"], answer:0 },

  // Science - 10
  { question: "जल का रासायनिक सूत्र क्या है?", options: ["H2O","CO2","O2","NaCl"], answer:0 },
  { question: "विद्युत धारा की इकाई क्या है?", options: ["वोल्ट","ओम","एम्पियर","वाट"], answer:2 },
  { question: "सूर्य से आने वाली ऊर्जा को क्या कहते हैं?", options: ["सौर ऊर्जा","जल ऊर्जा","पवन ऊर्जा","भू-ऊर्जा"], answer:0 },
  { question: "लोहे में जंग लगने का कारण क्या है?", options: ["नमी और ऑक्सीजन","धूप","कार्बन डाइऑक्साइड","पानी"], answer:0 },
  { question: "निम्न में से कौन एक अधातु है?", options: ["तांबा","चाँदी","फॉस्फोरस","पारा"], answer:2 },
  { question: "पौधे अपना भोजन किस प्रक्रिया से बनाते हैं?", options: ["श्वसन","पाचन","प्रकाश संश्लेषण","वाष्पोत्सर्जन"], answer:2 },
  { question: "पेट्रोलियम किससे बनता है?", options: ["पौधे","जंतु अवशेष","धातु","प्लास्टिक"], answer:1 },
  { question: "सूर्य के सबसे निकट ग्रह कौन सा है?", options: ["पृथ्वी","मंगल","बुध","शुक्र"], answer:2 },
  { question: "डायनामो किस ऊर्जा को किसमें बदलता है?", options: ["यांत्रिक से विद्युत","विद्युत से ध्वनि","ऊष्मा से प्रकाश","ध्वनि से ऊष्मा"], answer:0 },
  { question: "मानव शरीर में रक्त का रंग किस कारण लाल होता है?", options: ["जल","हीमोग्लोबिन","धातु","कैल्शियम"], answer:1 },

  // Social Science - 10
  { question: "अशोक किस वंश के राजा थे?", options: ["गुप्त","मौर्य","चोल","पल्लव"], answer:1 },
  { question: "भारत का संविधान कब लागू हुआ?", options: ["15 अगस्त 1947","26 जनवरी 1950","2 अक्टूबर 1950","1 अप्रैल 1951"], answer:1 },
  { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["हाथी","शेर","बाघ","गाय"], answer:2 },
  { question: "हिमालय की सबसे ऊँची चोटी का नाम क्या है?", options: ["कंचनजंघा","एवरेस्ट","नंदा देवी","गुरु शिखर"], answer:1 },
  { question: "अर्थशास्त्र में GDP का मतलब क्या होता है?", options: ["Gross Domestic Product","General Development Plan","Gross Demand Product","General Domestic Plan"], answer:0 },
  { question: "समानता का अधिकार संविधान का कौन सा अनुच्छेद है?", options: ["14","21","19","32"], answer:0 },
  { question: "भारत का सबसे बड़ा राज्य कौन सा है (क्षेत्रफल के आधार पर)?", options: ["उत्तर प्रदेश","महाराष्ट्र","राजस्थान","मध्य प्रदेश"], answer:2 },
  { question: "भूगोल में 'मानचित्र' को अंग्रेज़ी में क्या कहा जाता है?", options: ["Map","Chart","Graph","Picture"], answer:0 },
  { question: "सिंधु घाटी सभ्यता किस नदी के किनारे बसी थी?", options: ["गंगा","यमुना","सिंधु","नर्मदा"], answer:2 },
  { question: "वर्तमान में भारत के राष्ट्रपति कौन हैं? (2025)", options: ["रामनाथ कोविंद","द्रौपदी मुर्मू","प्रणब मुखर्जी","नरेन्द्र मोदी"], answer:1 },

  // GK - 10
  { question: "बिहार का राजकीय पक्षी कौन है?", options: ["गौरैया","कोयल","मोर","कौआ"], answer:0 },
  { question: "‘जन गण मन’ के रचयिता कौन हैं?", options: ["रवींद्रनाथ टैगोर","बंकिमचंद्र चट्टोपाध्याय","सुरय्योदय शर्मा","सुभाष चंद्र बोस"], answer:0 },
  { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट","हॉकी","कुश्ती","फुटबॉल"], answer:1 },
  { question: "निम्न में से कौन भारत का पर्वत है?", options: ["एंडीज","आल्प्स","हिमालय","रॉकी"], answer:2 },
  { question: "बिहार के पहले मुख्यमंत्री कौन थे?", options: ["डॉ. राजेंद्र प्रसाद","श्रीकृष्ण सिंह","करपूरी ठाकुर","लालू प्रसाद यादव"], answer:1 },
  { question: "भारतीय सेना का ध्वज रंग कौन सा होता है?", options: ["हरा","लाल","नीला","केसरिया"], answer:3 },
  { question: "विश्व स्वास्थ्य संगठन (WHO) का मुख्यालय कहाँ स्थित है?", options: ["वाशिंगटन","पेरिस","बर्लिन","जिनेवा"], answer:3 },
  { question: "भारत की मुद्रा कौन सी है?", options: ["डॉलर","रुपया","यूरो","येन्"], answer:1 },
  { question: "चाँदी का रासायनिक संकेत क्या है?", options: ["Au","Ag","Fe","Sn"], answer:1 },
  { question: "वर्तमान में भारत के प्रधानमंत्री कौन हैं? (2025)", options: ["नरेन्द्र मोदी","राहुल गांधी","अरविंद केजरीवाल","योगी आदित्यनाथ"], answer:0 }
];

// ---------------- STATE & UI ----------------
let questions = []; // shuffled questions
let currentIndex = 0;
let score = 0;
let timeLeft = FULL_TIME_SECONDS;
let timerInterval = null;
let playerName = "";

// DOM refs
const startBtn = document.getElementById('startBtn');
const acceptChk = document.getElementById('accept');
const playerNameInput = document.getElementById('playerName');
const welcomeSec = document.getElementById('welcome');
const quizSec = document.getElementById('quiz');
const resultSec = document.getElementById('result');
const qnum = document.getElementById('qnum');
const progress = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const questionText = document.getElementById('questionText');
const optionsDiv = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const endBtn = document.getElementById('endBtn');
const scoreSummary = document.getElementById('scoreSummary');
const detailsEl = document.getElementById('details');
const saveBtn = document.getElementById('saveBtn');
const saveNameInput = document.getElementById('saveName');
const savedMsg = document.getElementById('savedMsg');
const retryBtn = document.getElementById('retryBtn');
const homeBtn = document.getElementById('homeBtn');

// enable start button only when checkbox checked
acceptChk.addEventListener('change', ()=> {
  startBtn.disabled = !acceptChk.checked;
});

// start quiz
startBtn.addEventListener('click', ()=>{
  playerName = (playerNameInput.value || "").trim();
  saveNameInput.value = playerName;
  startQuiz();
});

// retry and navigation
retryBtn.addEventListener('click', ()=> {
  resetAndStart();
});
homeBtn.addEventListener('click', ()=> {
  resultSec.classList.add('hidden');
  welcomeSec.classList.remove('hidden');
});

// next button
nextBtn.addEventListener('click', ()=>{
  // move to next question
  currentIndex++;
  renderQuestion();
});

// end early
endBtn.addEventListener('click', ()=>{
  if(confirm('Kya aap quiz submit karna chahte hain?')) endQuiz();
});

// save to Google Sheet
saveBtn.addEventListener('click', ()=>{
  const nameToSave = (saveNameInput.value || playerName || "Unknown").trim();
  saveResultToSheet(nameToSave, score);
});

// ---------------- FUNCTIONS ----------------
function startQuiz(){
  // shuffle questions and use all 50
  questions = shuffleArray(QUESTION_POOL.slice()).slice(0, TOTAL_QUESTIONS);
  currentIndex = 0; score = 0; timeLeft = FULL_TIME_SECONDS;
  progress.max = TOTAL_QUESTIONS;
  progress.value = 0;
  welcomeSec.classList.add('hidden');
  resultSec.classList.add('hidden');
  quizSec.classList.remove('hidden');
  renderQuestion();
  startTimer();
}

function resetAndStart(){
  // reload same as start
  startQuiz();
}

// render question
function renderQuestion(){
  nextBtn.style.display = 'none';
  if(currentIndex >= questions.length){
    endQuiz();
    return;
  }
  const q = questions[currentIndex];
  qnum.textContent = `Q ${currentIndex+1} / ${questions.length}`;
  progress.value = currentIndex;
  questionText.textContent = q.question;
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx)=>{
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.innerText = opt;
    b.onclick = ()=> chooseOption(idx, b);
    optionsDiv.appendChild(b);
  });
}

// option chosen
let answered = false;
function chooseOption(selectedIdx, btnEl){
  if(answered) return;
  answered = true;
  // disable buttons
  Array.from(optionsDiv.children).forEach(c=> c.disabled = true);
  const correct = questions[currentIndex].answer;
  if(selectedIdx === correct){
    btnEl.classList.add('correct');
    score++;
  } else {
    btnEl.classList.add('wrong');
    // highlight correct
    Array.from(optionsDiv.children).forEach((c,i)=> { if(i===correct) c.classList.add('correct'); });
  }
  // show next or finish
  nextBtn.style.display = (currentIndex < questions.length-1) ? 'inline-block' : 'none';
  // if last question, finish after short delay
  if(currentIndex === questions.length-1){
    setTimeout(()=> endQuiz(), 700);
  }
  // reset answered for next question when moving
  setTimeout(()=> { answered = false; }, 200);
}

// TIMER
function startTimer(){
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    timeLeft--;
    updateTimerDisplay();
    if(timeLeft <= 0){
      clearInterval(timerInterval);
      alert('Time up! Quiz submit ho raha hai.');
      endQuiz();
    }
  },1000);
}
function updateTimerDisplay(){
  const mm = Math.floor(timeLeft/60);
  const ss = timeLeft % 60;
  timerEl.textContent = `${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
}

// END QUIZ
function endQuiz(){
  clearInterval(timerInterval);
  quizSec.classList.add('hidden');
  resultSec.classList.remove('hidden');
  // fill summary
  const totalAnswered = questions.length;
  const wrong = totalAnswered - score;
  const percent = Math.round((score/totalAnswered)*100);
  scoreSummary.innerHTML = `<strong>Score:</strong> ${score} / ${totalAnswered} (${percent}%)`;
  detailsEl.innerHTML = `Correct: ${score} &nbsp; | &nbsp; Wrong: ${wrong}`;
  // show saveName
  saveNameInput.value = playerName || "";
  savedMsg.style.display = 'none';
  // auto-send? we wait for Save button so teacher can control who saved
}

// SAVE to Google Sheet (POST)
function saveResultToSheet(name, scoreVal){
  // send minimal JSON — using no-cors to avoid CORS issues; response will be opaque
  fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      score: scoreVal,
      total: questions.length,
      percentage: Math.round((scoreVal/questions.length)*100),
      timestamp: new Date().toISOString()
    })
  })
  .then(()=> {
    savedMsg.style.display = 'block';
    // optionally store locally
    localStorage.setItem('lastQuizSave', JSON.stringify({name,score:scoreVal,when:new Date().toISOString()}));
  })
  .catch(err=>{
    console.error('Save error:', err);
    alert('Save failed (console me error dekho).');
  });
}

// UTIL: shuffle
function shuffleArray(a){
  let arr = a.slice();
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

// PAGE INIT
window.addEventListener('load', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  // set default visibility
  welcomeSec.classList.remove('hidden');
  quizSec.classList.add('hidden');
  resultSec.classList.add('hidden');
});
