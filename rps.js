function playGame() {
  var roundsAmount = 3; 

  playRounds(roundsAmount);
}
function playRounds(roundsAmount) {
  var playerScore = 0;
  var npcScore = 0;
  for (let index = 0; index < roundsAmount; index++) {
    roundResult = playRound();
    if (roundResult == "Player") {
      console.log("Player won round!"); 
      playerScore++;
      console.log("Player have already won " + playerScore + " games!"); 
    } else if (roundResult == "NPC")
    {
      console.log("NPC won round!"); 
      npcScore++;
      console.log("NPC have already won " + npcScore + " games!"); 
    } else 
    {
      console.log("Draw!"); 
    }
  }
}
function playRound() {
  var result = "Undecided";
  console.log("Enter Paper, Rock or Scissors"); 
  var playerChoice = prompt();
  return whoWon (playerStringToObject(playerChoice), getNPCChoice());
}
function playerStringToObject(playerString) {
  var playerChoiceObject;
  for (let index = 0; index < 3; index++) {
    // console.log("Player : " + playerString); 
    // console.log("NPC : " + typesDictionary[index].Type); 
    const element = typesDictionary[index];
    // console.log("LC " + element.Id.localeCompare(playerString, undefined, { sensitivity: 'base' })); 
    if (element.Type.localeCompare(playerString, undefined, { sensitivity: 'base' }) === 0 || element.Id.localeCompare(playerString, undefined, { sensitivity: 'accent' }) === 0 ) {
      playerChoiceObject = element;
    }
  }
  return playerChoiceObject;
}
function whoWon(player, npc) {
    var winner;
    console.log("Player choice: " + player.Type); 
    console.log("NPC choice: " + npc.Type); 
    if(player.Wins == npc.Type){
      winner = "Player";
    } else if(npc.Wins == player.Type){
      winner = "NPC";
    }
    else{
      winner = "Draw";
    }
    return winner;
}
function getNPCChoice() {
  return typesDictionary[Math.floor(Math.random() * 3)];
}

var typesDictionary = {}
typesDictionary[0] = {
    Id: "1",
    Type: "Rock",
    Wins: "Scissors",
    Loses: "Paper",
    Translation: "Камень"
  };
typesDictionary[1] = {
    Id: "2",
    Type: "Scissors",
    Wins: "Paper",
    Loses: "Rock",
    Translation: "Ножницы"
  };
typesDictionary[2] = {
    Id: "3",
    Type: "Paper",
    Wins: "Rock",
    Loses: "Scissors",
    Translation: "Бумага"
  };
  
// Example usage:
//console.log(getNPCChoice().Type); // e.g. 'Rock'

playGame();
  