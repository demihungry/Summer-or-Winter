/*Add your JavaScript here*/
var summerScore = 0;
var winterScore = 0;
var question = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var done = document.getElementById("done");
var restart = document.getElementById("restart");

q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", summer);
q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", winter);
q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);
done.addEventListener("click", showResult);
restart.addEventListener("click", clear);


function winter(){
  winterScore += 1;
  question += 1;
  console.log("winterScore = " + winterScore + " question = " + question);
  if (question == 1){
    q1a1.disabled = true;
    q1a2.disabled = true;
  }
  if (question == 2){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
  }
  if (question == 3){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
  }
  
}

function summer(){
  summerScore += 1;
  question += 1;
  console.log("summerScore = " + summerScore + " question = " + question);
  if (question == 1){
    q1a1.disabled = true;
    q1a2.disabled = true;
  }
  if (question == 2){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
  }
  if (question == 3){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
  }
}

function showResult(){
  if (question != 3){
    result.innerHTML = "You are not done yet...";
  }
  else if (winterScore < summerScore){
    console.log("You are a summer person");
    result.innerHTML = "You are a summer person!";
  }
  else if (winterScore > summerScore){
    console.log("You are a winter person");
    result.innerHTML = "You are a winter person!";
  }

}

function clear(){
  winterScore = 0;
  summerScore = 0;
  question = 0;
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  result.innerHTML = "Your result is...";
  
}