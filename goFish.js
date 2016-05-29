var body;
var play;
var instructions;
var board;
var numPlayers;

window.onload = function()
{
  console.log("loaded");
  body = document.querySelector("body");
  play = document.getElementById("play");
  play.addEventListener("click", function()
  {
    removeInstructions();
    removeButtons();
    amountOfPlayers();
  });
  instructions = document.getElementById("instructions");
  instructions.addEventListener("click", function()
  {
    removeInstructions();
    createInstructions();
  });
}
function removeInstructions()
{
  var instructionsText = document.getElementById("instructionsText");
  if (instructionsText)
  {
    instructionsText.parentNode.removeChild(instructionsText);
  }
}
function removeButtons()
{
  var instructions = document.getElementById("instructions");
  if (instructions)
  {
    instructions.parentNode.removeChild(instructions);
  }
  var play = document.getElementById("play");
  if (play)
  {
    play.parentNode.removeChild(play);
  }
}
function createInstructions()
{
  var instructionsText = document.createElement("div");
  instructionsText.setAttribute("id", "instructionsText");
  instructionsText.innerHTML="Put instructions here.";
  body.appendChild(instructionsText);
}
function amountOfPlayers()
{
  var numberOfPlayers = document.createElement("div");
  numberOfPlayers.setAttribute("id","numberOfPlayers")
  numberOfPlayers.innerHTML="Select the Number of Players";
  var three = document.createElement("span");
  three.setAttribute("id","three");
  three.innerHTML="3";
  three.addEventListener("click", function()
  {
    numPlayers=3;
    console.log(numPlayers);
    playGame();
  });
  var four = document.createElement("span");
  four.setAttribute("id","four");
  four.innerHTML="4";
  four.addEventListener("click", function()
  {
    numPlayers=4;
    console.log(numPlayers);
    playGame();
  });
  var five = document.createElement("span");
  five.setAttribute("id","five");
  five.innerHTML="5";
  five.addEventListener("click", function()
  {
    numPlayers=5;
    console.log(numPlayers);
    playGame();
  });
  var six = document.createElement("span");
  six.setAttribute("id","six");
  six.innerHTML="6";
  six.addEventListener("click", function()
  {
    numPlayers=6;
    console.log(numPlayers);
    playGame();
  });
  twoButtons.appendChild(numberOfPlayers);
  twoButtons.appendChild(three);
  twoButtons.appendChild(four);
  twoButtons.appendChild(five);
  twoButtons.appendChild(six);
}
function playGame()
{
  console.log("play game");
}
