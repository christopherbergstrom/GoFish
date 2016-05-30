var body;
var play;
var instructions;
var board;
var deck;
var numPlayers;
var player;
var comp1;
var comp2;
var comp3;
var comp4;
var comp5;
var deckHand = []
var playerHand = [];
var comp1Hand = [];
var comp2Hand = [];
var comp3Hand = [];
var comp4Hand = [];
var comp5Hand = [];

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
    setUp();
  });
  var four = document.createElement("span");
  four.setAttribute("id","four");
  four.innerHTML="4";
  four.addEventListener("click", function()
  {
    numPlayers=4;
    console.log(numPlayers);
    setUp();
  });
  var five = document.createElement("span");
  five.setAttribute("id","five");
  five.innerHTML="5";
  five.addEventListener("click", function()
  {
    numPlayers=5;
    console.log(numPlayers);
    setUp();
  });
  var six = document.createElement("span");
  six.setAttribute("id","six");
  six.innerHTML="6";
  six.addEventListener("click", function()
  {
    numPlayers=6;
    console.log(numPlayers);
    setUp();
  });
  twoButtons.appendChild(numberOfPlayers);
  twoButtons.appendChild(three);
  twoButtons.appendChild(four);
  twoButtons.appendChild(five);
  twoButtons.appendChild(six);
}
function setUp()
{
  console.log("play game");
  var twoButtons = document.getElementById("twoButtons");
  if (twoButtons)
  {
    twoButtons.parentNode.removeChild(twoButtons);
  }
  createDeck();
}
function createDeck()
{
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var cards = ["Two of ", "Three of ", "Four of ", "Five of ", "Six of ", "Seven of ", "Eight of ", "Nine of ", "Ten of ", "Jack of ", "Queen of ", "King of ", "Ace of "];
  for(var i=0; i<suits.length; i++)
  {
    for (var j=0; j<cards.length; j++)
    {
      deckHand.push(cards[j]+suits[i]);
    }
  }
  shuffle(deckHand);
}
function shuffle(deckHand)
{
  console.log("in shuffle");
  var temporaryValue, randomIndex;
  for (var i=0; i<deckHand.length; i++)
  {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * i);

    // And swap it with the current element.
    temporaryValue = deckHand[i];
    deckHand[i] = deckHand[randomIndex];
    deckHand[randomIndex] = temporaryValue;
  }
  console.log(deckHand);
  assignCards(deckHand)
}
function assignCards(deckHand)
{
  board = document.createElement("div");
  board.setAttribute("id","board");
  deck = document.createElement("span")
  deck.setAttribute("id","deck");
  player = document.createElement("span");
  player.setAttribute("id","player");
  player.innerHTML="player";
  comp1 = document.createElement("span");
  comp1.setAttribute("id","comp1");
  comp1.innerHTML="comp1";
  comp2 = document.createElement("span");
  comp2.setAttribute("id","comp2");
  comp2.innerHTML="comp2";
  comp3 = document.createElement("span");
  comp3.setAttribute("id","comp3");
  comp3.innerHTML="comp3";
  comp4 = document.createElement("span");
  comp4.setAttribute("id","comp4");
  comp4.innerHTML="comp4";
  comp5 = document.createElement("span");
  comp5.setAttribute("id","comp5");
  comp5.innerHTML="comp5";
  if (numPlayers === 3)
  {
    for (var i=0; i<3;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        assignCardsToWho(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
  }
  else if (numPlayers === 4)
  {
    for (var i=0; i<4;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        assignCardsToWho(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    board.appendChild(comp3);
  }
  else if (numPlayers === 5)
  {
    for (var i=0; i<5;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        assignCardsToWho(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    board.appendChild(comp3);
    board.appendChild(comp4);
  }
  else if (numPlayers === 6)
  {
    for (var i=0; i<6;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        assignCardsToWho(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    board.appendChild(comp3);
    board.appendChild(comp4);
    board.appendChild(comp5);
  }
  deck.innerHTML=deckHand.length;
  board.appendChild(deck);
  body.appendChild(board);
  console.log("playerHand");
  console.log(playerHand);
  console.log("comp1Hand");
  console.log(comp1Hand);
  console.log("comp2Hand");
  console.log(comp2Hand);
  console.log("comp3Hand");
  console.log(comp3Hand);
  console.log("comp4Hand");
  console.log(comp4Hand);
  console.log("comp5Hand");
  console.log(comp5Hand);
}
function assignCardsToWho(deckHand, who, card)
{
  if (who === 0)
  {
    playerHand.push(deckHand[card]);
    deckHand.splice(card, 1);
  }
  if (who === 1)
  {
    comp1Hand.push(deckHand[card]);
    deckHand.splice(card, 1);
  }
  if (who === 2)
  {
    comp2Hand.push(deckHand[card]);
    deckHand.splice(card, 1);
  }
  if (who === 3)
  {
    comp3Hand.push(deckHand[card]);
    deckHand.splice(card, 1);
  }
  if (who === 4)
  {
    comp4Hand.push(deckHand[card]);
    deckHand.splice(card, 1);
  }
  if (who === 5)
  {
    comp5Hand.push(deckHand[card]);
    deckHand.splice(card, 1);
  }
  // console.log(deckHand.length);
}
