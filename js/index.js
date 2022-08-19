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

// get question on dom load
document.addEventListener("DOMContentLoaded", getQuestion);
// next button click
nextBtn.addEventListener("click", validate);

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

// display question to user
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = "";
  inputProgress.style.width = "100%";
}

// hide question
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = "none";
  inputGroup.style.border = null;
}

// transform to create shake motion
function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// validate field
function validate() {
  // make sure patter matches if there is one
  if (!inputField.value.match(questions[position].pattern || /.+/)) {
    inputFail();
  } else {
    inputPass();
  }
}

// field input fail
function inputFail() {
  formBox.className = "error";

  // repeat shake motion - set i to number of shakes
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
    inputField.focus();
  }
}

// field input passed
function inputPass() {
  formBox.className = "";
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);
}
