import '../css/style.css'

console.log("hi");

const choices = ["rock", "paper", "scissors"];



const playerChoices = document.getElementById("playerchoices");

playerChoices.addEventListener("click", (event) => {
  if (event.target.classList.contains("emoji")) {

    const playerChoice = event.target.alt.toLowerCase()
    console.log("Player picked:", playerChoice);


    Array.from(playerChoices.children)
      .filter(choice => choice !== event.target)
      .forEach(choice => choice.style.display = "none");

    const computerChoice = computerchoice();

    setTimeout(() => {
      const computerEmojiElement = document.getElementById("computerEmoji");
      computerEmojiElement.src = getEmojiUrl(computerChoice);
      console.log("Computer picked:", computerChoice);

      winner(playerChoice, computerChoice);

    }, 1000);

  }
});


function computerchoice() {
  const randomizer = Math.floor(Math.random() * choices.length);
  for (let i = 0; i < choices.length; i++) {
    if (i === randomizer) {
      return choices[i];
    }
  }
}


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

function winner(playerChoice, computerChoice) {
  const winnermessageElement = document.getElementById("winnermessage")

  if (playerChoice === computerChoice) {
    console.log("ITS A TIE");
    winnermessageElement.textContent = "ITS A TIE";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("YOU WON");
    winnermessageElement.textContent = "YOU WIN";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("YOU WON");
    winnermessageElement.textContent = "YOU WIN";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("YOU WON");
    winnermessageElement.textContent = "YOU WIN";
  } else {
    console.log("YOU LOST the computer won :(");
    winnermessageElement.textContent = "YOU LOST the computer won :(";
  }
}



















































