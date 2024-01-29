import '../css/style.css'

console.log("hi");

const choices = ["rock", "paper", "scissors"];

const playerChoices = document.getElementById("playerchoices");
// click event so the emojis r interactive
playerChoices.addEventListener("click", (event) => {
  if (event.target.classList.contains("emoji")) {
    // get player choice
    const playerChoice = event.target.alt.toLowerCase()
    console.log("Player picked:", playerChoice);
    
    // hide other choices
    Array.from(playerChoices.children)
    .filter(choice => choice !== event.target) //filters for emoji we click
    .forEach(choice => choice.style.display = "none"); //hides the other emojis
    }});

function computerchoice(){
  const randomizer = Math.floor(Math.random() * choices.length); //rando number
  for (let i = 0; i < choices.length; i++) { //redundent but js in case
    if (i === randomizer) { 
      return choices[i]; //if its equal return the emoji that matches the number
    }
  }
}

const computerChoice = computerchoice();

const computerEmojiElement = document.getElementById("computerEmoji");
    computerEmojiElement.src = getEmojiUrl(computerChoice);

    console.log("Computer picked:", computerChoice);

function getEmojiUrl(choice) {
  if (choice === "rock") {
    return "https://i.pinimg.com/736x/d3/36/b6/d336b685d867234c2edb1510841d67f0.jpg";
  } else if (choice === "paper") {
    return "https://i.pinimg.com/736x/fc/d6/c3/fcd6c3db28379b38e2eacbc5299d456f.jpg";
  } else if (choice === "scissors") {
    return "https://img.freepik.com/premium-vector/scissors-vector-isolated-icon-emoji-illustration-scissors-vector-emoticon_603823-800.jpg";
  } else {
    return "";
  }
}












































/* function computer() {
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
  
} */

/* const choices = ['rock', 'paper', 'scissors'];



  function playerChoice(player) {
    // Hide other choices
    for (let i = 0; i < choices.length; i++) {
      document.querySelectorAll('.choices')[i].style.display = 'none';
    }

    // Display player choice
    document.querySelector('.result').textContent = `You chose ${player}`;

    // Get computer choice
    const computer = choices[Math.floor(Math.random() * choices.length)];

    // Display computer choice after a delay
    let i = 0;
    function displayComputerChoice() {
      document.querySelector('.result').textContent = `You chose ${player}, Computer chose ${computer}`;
      document.querySelector('.computer-side').innerHTML = `<img src="${getImgUrl(computer)}" alt="${computer}">`;
      i++;
      if (i < 1) {
        setTimeout(displayComputerChoice, 1000);
      }
    }
    
    setTimeout(displayComputerChoice, 1000);
  }

  function getImgUrl(choice) {
    switch (choice) {
      case 'rock':
        return 'https://i.pinimg.com/736x/d3/36/b6/d336b685d867234c2edb1510841d67f0.jpg';
      case 'paper':
        return 'https://i.pinimg.com/736x/fc/d6/c3/fcd6c3db28379b38e2eacbc5299d456f.jpg';
      case 'scissors':
        return 'https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/share/2702.jpg';
    }
  } */