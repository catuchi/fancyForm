// questions array
const questions = [
  { question: "Enter Your First Name" },
  { question: "Enter Your Last Name" },
  { question: "Enter Your Email", pattern: /\S+@\S+\.\S+/ },
  { question: "Create A Password", type: "password" },
];

// transition times
const shakeTime = 100;
const switchTime = 200;

// init position to first question
const position = 0;

// init DOM elements
const formBox = document.getElementById("form-box");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const inputGroup = document.getElementById("input-group");
const inputField = document.getElementById("input-field");
const inputLabel = document.getElementById("input-label");
const inputProgress = document.getElementById("input-progress");
const progress = document.getElementById("progress-bar");

// events

document.addEventListener("DOMContentLoaded", getQuestion);

// functions

// get question from array and add to markup
function getQuestion() {
  // get current question
  inputLabel.innerHTML = questions[position].question;

  // get current type
  inputField.type = questions[position].type || "text";

  // get current answer
  inputField.value = questions[position].type || "";

  // focus on element
  inputField.focus();

  // set progress bar width - variable to the question length
  progress.style.width = (position * 100) / questions.length + "%";

  // add user icon or back arrow depending on question
  prevBtn.className = position ? "fas fa-arrow-left" : "fas fa-user";

  showQuestion();
}
