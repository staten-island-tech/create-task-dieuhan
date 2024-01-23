import '../css/style.css'

console.log("hi");

function computer() {
  const choices = ["rock", "paper", "scissors"]; //ARRAY
  const randomizer = Math.floor(Math.random()* choices.length);
  return choices[randomizer];
}

function winner(){
if (user == "rock" && computer == "scissors"){
  return "you win";
} else if (user == "paper" && computer == "rock"){
  return "you win";
} else if (user == "scissors" && computer == "paper"){
  return "you win";
} else if (user == computer){
  return "you tie";
} else {
  return "you lose";
}}

function game(){
  const computerchoice = computer();
  const result = winner();
  
}