//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var indieScore = 0;
var popScore = 0;
var lofiScore = 0;
var classicalScore = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
//Question 1

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//Question 2

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//Question 3

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q4a4");






//#TODO: Add Event Listeners to your answer choice variables.
//Question 1

q1a1.addEventListener("click", indie);
q1a2.addEventListener("click", pop);
q1a3.addEventListener("click", lofi);
q1a4.addEventListener("click", classical);

q2a1.addEventListener("click", indie);
q2a2.addEventListener("click", pop);
q2a3.addEventListener("click", lofi);
q2a4.addEventListener("click", classical);

q3a1.addEventListener("click", indie);
q3a2.addEventListener("click", pop);
q3a3.addEventListener("click", lofi);
q3a4.addEventListener("click", classical);







//#TODO: Define quiz functions here
function indie(){
  indieScore += 1;
  questionCount += 1; 
  if (questionCount >= 3){
    updateResult();
  }
  
}
function pop(){
  popScore += 1;
  questionCount += 1; 
  if (questionCount >= 3){
    updateResult();
}
function lofi(){
  lofiScore += 1;
  questionCount += 1; 
  if (questionCount >= 3){
    updateResult();
}
function classical(){
  classicalScore += 1;
  questionCount += 1; 
  if (questionCount >= 3){
    updateResult();
}

function updateResult(){
  
}


// Part 3 - Displaying results
var result = document.getElementById("result");
 
function updateResult() {
  if (indieScore >= 2) {
    result.innerHTML = "Indie Music!";
  } else if(popScore >= 2) {
     result.innerHTML = "Pop Music!";
  } else if(lofiScore >= 2) {
    result.innerHTML = "Lofi Music!";
  } else if(classicalScore >= 2) {
    result.innerHTML = "Classical!";
  } else {
   result.innerHTML = "Hmmm.. I'm not sure";
  }
}


// Extensions below

//Extension 2 - Restart the Quiz
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
                                  
function restartQuiz() {
  result.innerHTML = "Your result is..."; 
  questionPosition = 0; 
  indieScore = 0;
  popScore = 0;
  lofiScore = 0;
  classicalScore = 0;
  enableQuestions(); //Part of Extension 5
}

// Extension 5 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}