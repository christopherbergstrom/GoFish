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
var scoresSpan;
var scoresText;
var playerScores;
var comp1Scores;
var comp2Scores;
var comp3Scores;
var comp4Scores;
var comp5Scores;
var playerBooks = 0;
var comp1Books = 0;
var comp2Books = 0;
var comp3Books = 0;
var comp4Books = 0;
var comp5Books = 0;
var deckHand = []
var playerHand = [];
var comp1Hand = [];
var comp2Hand = [];
var comp3Hand = [];
var comp4Hand = [];
var comp5Hand = [];
var clickedCard;

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
function createScores()
{

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
  player = document.createElement("div");
  player.setAttribute("id","player");
  // player.innerHTML="player";
  comp1 = document.createElement("span");
  comp1.setAttribute("id","comp1");
  comp1.innerHTML="comp1";
  comp1.addEventListener("click", function()
  {
    ask(1);
  });
  comp2 = document.createElement("span");
  comp2.setAttribute("id","comp2");
  comp2.innerHTML="comp2";
  comp2.addEventListener("click", function()
  {
    ask(2);
  });
  comp3 = document.createElement("span");
  comp3.setAttribute("id","comp3");
  comp3.innerHTML="comp3";
  comp3.addEventListener("click", function()
  {
    ask(3);
  });
  comp4 = document.createElement("span");
  comp4.setAttribute("id","comp4");
  comp4.innerHTML="comp4";
  comp4.addEventListener("click", function()
  {
    ask(4);
  });
  comp5 = document.createElement("span");
  comp5.setAttribute("id","comp5");
  comp5.innerHTML="comp5";
  comp5.addEventListener("click", function()
  {
    ask(5);
  });
  // scores table
  scoresSpan = document.createElement("span");
  scoresSpan.setAttribute("id","scoresSpan");
  scoresText = document.createElement("div");
  scoresText.setAttribute("id","scoresText");
  scoresText.innerHTML="Scores";
  playerScores = document.createElement("div");
  playerScores.setAttribute("id","playerScores");
  playerScores.innerHTML="Player: "+playerBooks;
  comp1Scores = document.createElement("div");
  comp1Scores.setAttribute("id","comp1Scores");
  comp1Scores.innerHTML="Comp1: "+comp1Books;
  comp2Scores = document.createElement("div");
  comp2Scores.setAttribute("id","comp2Scores");
  comp2Scores.innerHTML="Comp2: "+comp2Books;
  comp3Scores = document.createElement("div");
  comp3Scores.setAttribute("id","comp3Scores");
  comp3Scores.innerHTML="Comp3: "+comp3Books;
  comp4Scores = document.createElement("div");
  comp4Scores.setAttribute("id","comp4Scores");
  comp4Scores.innerHTML="Comp4: "+comp4Books;
  comp5Scores = document.createElement("div");
  comp5Scores.setAttribute("id","comp5Scores");
  comp5Scores.innerHTML="Comp5: "+comp5Books;
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
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerScores);
    scoresSpan.appendChild(comp1Scores);
    scoresSpan.appendChild(comp2Scores);
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
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerScores);
    scoresSpan.appendChild(comp1Scores);
    scoresSpan.appendChild(comp2Scores);
    scoresSpan.appendChild(comp3Scores);
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
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerScores);
    scoresSpan.appendChild(comp1Scores);
    scoresSpan.appendChild(comp2Scores);
    scoresSpan.appendChild(comp3Scores);
    scoresSpan.appendChild(comp4Scores);
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
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerScores);
    scoresSpan.appendChild(comp1Scores);
    scoresSpan.appendChild(comp2Scores);
    scoresSpan.appendChild(comp3Scores);
    scoresSpan.appendChild(comp4Scores);
    scoresSpan.appendChild(comp5Scores);
  }
  deck.innerHTML=deckHand.length;
  board.appendChild(deck);
  board.appendChild(scoresSpan);
  body.appendChild(board);
  for (var i=0;i<playerHand.length;i++)
  {
    var array = playerHand;
    addCard(i, array);
  }
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
function addCard(num, array)
{
  var card = document.createElement("span");
  card.setAttribute("class","card");
  card.innerHTML=array[num];
  card.addEventListener("click", function()
  {
    var clickedCardArray=array[num].split(" ");
    clickedCard=clickedCardArray[0];
    console.log(clickedCard);
  })
  player.appendChild(card);
}
function ask(num)
{
  if (num === 1 && clickedCard)
  {
    for (var i = 0; i < comp1Hand.length; i++)
    {
      if (comp1Hand[i].indexOf(clickedCard) !== -1)
      {
        
        console.log("found it!");
      }
    }
  }
  else if (num === 2 && clickedCard)
  {
    for (var i = 0; i < comp2Hand.length; i++)
    {
      if (comp2Hand[i].indexOf(clickedCard) !== -1)
      {
        console.log("found it!");
      }
    }
  }
  else if (num === 3 && clickedCard)
  {
    for (var i = 0; i < comp3Hand.length; i++)
    {
      if (comp3Hand[i].indexOf(clickedCard) !== -1)
      {
        console.log("found it!");
      }
    }
  }
  else if (num === 4 && clickedCard)
  {
    for (var i = 0; i < comp4Hand.length; i++)
    {
      if (comp4Hand[i].indexOf(clickedCard) !== -1)
      {
        console.log("found it!");
      }
    }
  }
  else if (num === 5 && clickedCard)
  {
    for (var i = 0; i < comp5Hand.length; i++)
    {
      if (comp5Hand[i].indexOf(clickedCard) !== -1)
      {
        console.log("found it!");
      }
    }
  }
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
