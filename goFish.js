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
var scoresArray = [];
var playerBooks = 0;
var comp1Books = 0;
var comp2Books = 0;
var comp3Books = 0;
var comp4Books = 0;
var comp5Books = 0;
var playerBooksAmount;
var comp1BooksAmount;
var comp2BooksAmount;
var comp3BooksAmount;
var comp4BooksAmount;
var comp5BooksAmount;
var message1;
var message2;
var message3;
var message4;
var deckHand = []
var playerHand = [];
var comp1Hand = [];
var comp2Hand = [];
var comp3Hand = [];
var comp4Hand = [];
var comp5Hand = [];
var clickedCard;
var clickedCardIndex;
var playersArray = [];

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
  instructionsText.innerHTML="Click a card in your hand to select it. Then click the player that you want to ask the card for, if the player has the card you asked for, it will be moved to your hand and you get to go again. If the player does not have the card you are asking for, you will automatically draw a card from the deck. If the card you draw is the same rank of the card that you asked for you get to go again, if not, it's the player's turn that you asked the card for. Players get points by getting 4 cards of the same rank. The game is over when either there are no more cards in any of the players' hands or when you don't have any cards left in your hand. Win by having the most points at the end of the game.";
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
  player.setAttribute("id", "player");
  // player.innerHTML=;
  comp1 = document.createElement("span");
  comp1.setAttribute("id","comp1");
  comp1.innerHTML="Player 1";
  comp1.addEventListener("click", function()
  {
    ask(1);
  });
  comp2 = document.createElement("span");
  comp2.setAttribute("id","comp2");
  comp2.innerHTML="Player 2";
  comp2.addEventListener("click", function()
  {
    ask(2);
  });
  comp3 = document.createElement("span");
  comp3.setAttribute("id","comp3");
  comp3.innerHTML="Player 3";
  comp3.addEventListener("click", function()
  {
    ask(3);
  });
  comp4 = document.createElement("span");
  comp4.setAttribute("id","comp4");
  comp4.innerHTML="Player 4";
  comp4.addEventListener("click", function()
  {
    ask(4);
  });
  comp5 = document.createElement("span");
  comp5.setAttribute("id","comp5");
  comp5.innerHTML="Player 5";
  comp5.addEventListener("click", function()
  {
    ask(5);
  });

  // message
  message1 = document.createElement("span");
  message1.setAttribute("id", "message1");
  message1.innerHTML="Select a card";
  board.appendChild(message1);
  message2 = document.createElement("span");
  message2.setAttribute("id", "message2");
  // message2.innerHTML="Select a card";
  board.appendChild(message2);
  message3 = document.createElement("span");
  message3.setAttribute("id", "message3");
  // message3.innerHTML="Select a card";
  board.appendChild(message3);
  message4 = document.createElement("span");
  message4.setAttribute("id", "message4");
  // message4.innerHTML="Select a card";
  board.appendChild(message4);

  // scores table
  scoresSpan = document.createElement("span");
  scoresSpan.setAttribute("id","scoresSpan");
  scoresText = document.createElement("div");
  scoresText.setAttribute("id","scoresText");
  scoresText.innerHTML="Scores";

  var playerDiv = document.createElement("div");
  playerScores = document.createElement("span");
  playerScores.setAttribute("id","playerScores");
  playerScores.innerHTML="You: ";
  playerBooksAmount = document.createElement("span");
  playerBooksAmount.innerHTML=playerBooks;
  playerDiv.appendChild(playerScores);
  playerDiv.appendChild(playerBooksAmount);

  var comp1Div = document.createElement("div");
  comp1Scores = document.createElement("span");
  comp1Scores.setAttribute("id","comp1Scores");
  comp1Scores.innerHTML="Player1: ";
  comp1BooksAmount = document.createElement("span");
  comp1BooksAmount.innerHTML=comp1Books;
  comp1Div.appendChild(comp1Scores);
  comp1Div.appendChild(comp1BooksAmount);

  comp2Scores = document.createElement("span");
  comp2Scores.setAttribute("id","comp2Scores");
  comp2Scores.innerHTML="Player2: ";
  comp2BooksAmount = document.createElement("span");
  comp2BooksAmount.innerHTML=comp2Books;
  var comp2Div = document.createElement("div");
  comp2Div.appendChild(comp2Scores);
  comp2Div.appendChild(comp2BooksAmount);

  var comp3Div = document.createElement("div");
  comp3Scores = document.createElement("span");
  comp3Scores.setAttribute("id","comp3Scores");
  comp3Scores.innerHTML="Player3: ";
  comp3BooksAmount = document.createElement("span");
  comp3BooksAmount.innerHTML=comp3Books;
  comp3Div.appendChild(comp3Scores);
  comp3Div.appendChild(comp3BooksAmount);

  var comp4Div = document.createElement("div");
  comp4Scores = document.createElement("span");
  comp4Scores.setAttribute("id","comp4Scores");
  comp4Scores.innerHTML="Player4: ";
  comp4BooksAmount = document.createElement("span");
  comp4BooksAmount.innerHTML=comp4Books;
  comp4Div.appendChild(comp4Scores);
  comp4Div.appendChild(comp4BooksAmount);

  var comp5Div = document.createElement("div");
  comp5Scores = document.createElement("span");
  comp5Scores.setAttribute("id","comp5Scores");
  comp5Scores.innerHTML="Player5: ";
  comp5BooksAmount = document.createElement("span");
  comp5BooksAmount.innerHTML=comp5Books;
  comp5Div.appendChild(comp5Scores);
  comp5Div.appendChild(comp5BooksAmount);
  if (numPlayers === 3)
  {
    playersArray.push(playerHand);
    playersArray.push(comp1Hand);
    playersArray.push(comp2Hand);
    for (var i=0; i<3;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        drawCard(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerDiv);
    scoresSpan.appendChild(comp1Div);
    scoresSpan.appendChild(comp2Div);
    scoresArray.push(playerBooksAmount)
    scoresArray.push(comp1BooksAmount)
    scoresArray.push(comp2BooksAmount)
  }
  else if (numPlayers === 4)
  {
    playersArray.push(playerHand);
    playersArray.push(comp1Hand);
    playersArray.push(comp2Hand);
    playersArray.push(comp3Hand);
    for (var i=0; i<4;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        drawCard(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    board.appendChild(comp3);
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerDiv);
    scoresSpan.appendChild(comp1Div);
    scoresSpan.appendChild(comp2Div);
    scoresSpan.appendChild(comp3Div);
    scoresArray.push(playerBooksAmount)
    scoresArray.push(comp1BooksAmount)
    scoresArray.push(comp2BooksAmount)
    scoresArray.push(comp3BooksAmount)
  }
  else if (numPlayers === 5)
  {
    playersArray.push(playerHand);
    playersArray.push(comp1Hand);
    playersArray.push(comp2Hand);
    playersArray.push(comp3Hand);
    playersArray.push(comp4Hand);
    for (var i=0; i<5;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        drawCard(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    board.appendChild(comp3);
    board.appendChild(comp4);
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerDiv);
    scoresSpan.appendChild(comp1Div);
    scoresSpan.appendChild(comp2Div);
    scoresSpan.appendChild(comp3Div);
    scoresSpan.appendChild(comp4Div);
    scoresArray.push(playerBooksAmount)
    scoresArray.push(comp1BooksAmount)
    scoresArray.push(comp2BooksAmount)
    scoresArray.push(comp3BooksAmount)
    scoresArray.push(comp4BooksAmount)
  }
  else if (numPlayers === 6)
  {
    playersArray.push(playerHand);
    playersArray.push(comp1Hand);
    playersArray.push(comp2Hand);
    playersArray.push(comp3Hand);
    playersArray.push(comp4Hand);
    playersArray.push(comp5Hand);
    for (var i=0; i<6;i++)
    {
      for (var j=0;j<5;j++)
      {
        var whichCard = Math.floor(Math.random() * deckHand.length);
        drawCard(deckHand, i, whichCard);
      }
    }
    board.appendChild(player);
    board.appendChild(comp1);
    board.appendChild(comp2);
    board.appendChild(comp3);
    board.appendChild(comp4);
    board.appendChild(comp5);
    scoresSpan.appendChild(scoresText);
    scoresSpan.appendChild(playerDiv);
    scoresSpan.appendChild(comp1Div);
    scoresSpan.appendChild(comp2Div);
    scoresSpan.appendChild(comp3Div);
    scoresSpan.appendChild(comp4Div);
    scoresSpan.appendChild(comp5Div);
    scoresArray.push(playerBooksAmount)
    scoresArray.push(comp1BooksAmount)
    scoresArray.push(comp2BooksAmount)
    scoresArray.push(comp3BooksAmount)
    scoresArray.push(comp4BooksAmount)
    scoresArray.push(comp5BooksAmount)
  }
  deck.innerHTML=deckHand.length;
  board.appendChild(deck);
  board.appendChild(scoresSpan);
  body.appendChild(board);
  sortAndAdd();
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
  card.setAttribute("id", array[num]);
  card.innerHTML=array[num];
  card.addEventListener("click", function()
  {
    var clickedCardArray=array[num].split(" ");
    clickedCard=clickedCardArray[0];
    clickedCardIndex = num;
    console.log(clickedCard);
    message1.innerHTML="Ask for a "+ clickedCard;
  });
  player.appendChild(card);
}
function ask(num)
{
  if (clickedCard)
  {
    message1.innerHTML="You asked Player "+num+" for a "+clickedCard;
  }
  else
  {
    message1.innerHTML="Select a card";
  }
  var count = 0;
  var cardMatches = [];
  if (clickedCard)
  {
    for (var i = 0; i < playersArray[num].length; i++)
    {
      if (playersArray[num][i].indexOf(clickedCard) !== -1)
      {
        console.log("found it!");
        // var index = clickedCardIndex;
        // playersArray[0].splice(index, 0, playersArray[num][i]);
        cardMatches.push(i);
      }
      else
      {
          count++;
      }
    }
    if (cardMatches.length)
    {
      message2.innerHTML="Player "+num+" gave you "+cardMatches.length+" card(s)";
      message3.innerHTML="";
      message4.innerHTML="";
      // console.log(cardMatches.length);
      // console.log(cardMatches);
      for (var i = 0; i < cardMatches.length; i++)
      {
        playersArray[0].push(playersArray[num][cardMatches[i]]);
      }
      for (var i = cardMatches.length-1; i >= 0; i--)
      {
        playersArray[num].splice(cardMatches[i], 1);
      }
      checkBook();
      clearCards();
      checkWin();
    }
    else if (count === playersArray[num].length)
    {
      if (deckHand.length > 0)
      {
        console.log("Go Fish");
        var whichCard = Math.floor(Math.random() * deckHand.length);
        drawCard(deckHand, 0, whichCard);
        var cardName = playersArray[0][playersArray[0].length-1].split(" ");
        var card = cardName[0];
        message2.innerHTML="Go fish - you drew a "+cardName[0]+" of "+cardName[2];
        if (card === clickedCard)
        {
          message2.innerHTML="Go fish - I drew the card that I asked for. I get to go again";
          console.log("got what I wanted. Go again.");
          message3.innerHTML="";
          message4.innerHTML="";
          checkBook();
          clearCards();
          checkWin();
        }
        else
        {
          checkBook();
          clearCards();
          checkWin();
          // message.innerHTML=+num+"'s turn";
          console.log("Computer's turn.");
          compTurn(playersArray[num], num);
          checkBook();
          clearCards();
          checkWin();
        }
      }
      else
      {
          message2.innerHTML="Go fish - the deck is out, there are no more cards to draw";
          checkBook();
          clearCards();
          checkWin();
          // message.innerHTML=+num+"'s turn";
          console.log("Computer's turn.");
          compTurn(playersArray[num], num);
          checkBook();
          clearCards();
          checkWin();
      }
    }
  }
}
function compTurn(comp, num)
{
  var cardMatches = [];
  var countNo = 0;
  var countYes = 0;
  do
  {
    var who = Math.floor(Math.random() * playersArray.length);
  } while (playersArray[who] === comp && playersArray[who]);
  var whichCard = Math.floor(Math.random() * comp.length);
  console.log(playersArray[who] === comp);
  console.log(who);
  console.log("comp: "+comp);
  console.log(playersArray[who]);
  console.log(comp[whichCard]);
  var cardName = comp[whichCard].split(" ");
  whichCard = cardName[0];
  if (who === 0)
  {
    message3.innerHTML="Player "+num+" asked you if have a "+whichCard;
  }
  else
  {
    message3.innerHTML="Player "+num+" asked Player "+who+" if he had a "+whichCard;
  }
  console.log("Comp"+num+" asked Comp"+who+" if he had a "+whichCard);
  for (var i = 0; i < playersArray[who].length; i++)
  {
    if (playersArray[who][i].indexOf(whichCard) !== -1)
    {
      countYes++;
      console.log("found it!");
      // console.log(comp);
      // console.log(playersArray[who]);
      // console.log(comp);
      // console.log(playersArray[who]);
      cardMatches.push(i);
    }
    else
    {
      countNo++;
    }
  }
  if (cardMatches.length)
  {
    for (var i = 0; i < cardMatches.length; i++)
    {
      comp.push(playersArray[who][cardMatches[i]]);
    }
    for (var i = cardMatches.length-1; i >= 0; i--)
    {
      playersArray[who].splice(cardMatches[i], 1);
    }
  }
  if (countYes)
  {
    if (who === 0)
    {
      message4.innerHTML="You gave Player "+num+" "+countYes+" card(s)";
    }
    else
    {
      message4.innerHTML="Player "+who+" gave Player "+num+" "+countYes+" card(s)";
    }
    console.log("comp"+who+" gave comp"+num+" "+countYes+" "+whichCard+"s");
  }
  else if (countNo === playersArray[who].length)
  {
    if (who === 0)
    {
      message4.innerHTML="You didn't have a "+whichCard;
    }
    else
    {
      message4.innerHTML="Player "+who+" didn't have a "+whichCard;
    }
    if (deckHand.length > 0)
    {
      console.log("Go Fish");
      var whichCardDraw = Math.floor(Math.random() * deckHand.length);
      drawCard(deckHand, num, whichCardDraw);
      var cardName = playersArray[num][playersArray[num].length-1].split(" ");
      var card = cardName[0];
      if (card === whichCard)
      {
        console.log("got what I wanted. Go again.");
      }
      else
      {
        console.log("Player's turn.");
      }
    }
  }
  console.log("comp"+num+": "+comp.length);
  console.log("comp"+who+": "+playersArray[who].length);
  // checkBook();
  // clearCards();
  // checkWin();
}
function clearCards()
{
  var playerCards = document.getElementById("player");
  while (playerCards.firstChild)
  {
    playerCards.removeChild(playerCards.firstChild);
  }
  sortAndAdd();
}
function sortAndAdd()
{
  playerHand.sort();
  for (var i=0;i<playerHand.length;i++)
  {
    addCard(i, playerHand);
  }
}
function drawCard(deckHand, num, card)
{
  playersArray[num].push(deckHand[card]);
  deckHand.splice(card, 1);
  deck.innerHTML = deckHand.length;
}
function checkBook()
{
  var count = 0;
  var cardMatches = [];
  var checkArray = [];
  for (var i = 0; i < playersArray.length; i++)
  {
    playersArray[i].sort();
    // console.log(playersArray[i]);
    console.log(playersArray[i].length);
    for (var j = 0; j < playersArray[i].length; j++)
    {
      var typeArray = playersArray[i][j].split(" ");
      checkArray.push(typeArray[0]);
    }
    for (var k = 0; k < checkArray.length; k++)
    {
      for (var l = 0; l < checkArray.length; l++)
      {
        if (checkArray[k] === checkArray[l])
        {
          // console.log(checkArray[k]);
          // console.log(k);
          // console.log(checkArray[l]);
          // console.log(l);
          count ++;
          cardMatches.push(l);
        }
      }
      if (cardMatches.length === 4)
      {
        console.log("found 4");
        scoresArray[i].innerHTML++;
        // console.log("player: "+playersArray[i]);
        // console.log("cardMatches: "+cardMatches);
        // console.log("checkArray: "+checkArray);
        for (var m = cardMatches.length-1; m >= 0; m--)
        {
          playersArray[i].splice(cardMatches[m], 1);
          checkArray.splice(cardMatches[m], 1);
        }
        // console.log("player: "+playersArray[i]);
        // console.log("checkArray: "+checkArray);
      }
      cardMatches = [];
    }
    checkArray = [];
  }
}
function checkWin()
{
  var winners;
  var winnersArray = [];
  var count = 0;
  for (var i = 0; i < playersArray.length; i++)
  {
    if (playersArray[i].length === 0)
    {
      count++;
      if (i === 0)
      {
        var remove = document.getElementById("player");
      }
      else
      {
        var remove = document.getElementById("comp"+i);
      }
      if (remove)
      {
        remove.parentNode.removeChild(remove);
      }
      // playersArray.splice(i, 1);
    }
  }
  // if (true)
  var player = document.getElementById("player");
  console.log(count);
  console.log(playersArray.length);
  console.log(count === playersArray.length);
  console.log(!player);
  if (count === playersArray.length || !player)
  {
    for (var i = 0; i < scoresArray.length; i++)
    {
      console.log(scoresArray[i].innerHTML);
      if (i === 0)
      {
        winners = scoresArray[i].innerHTML;
      }
      else
      {
        winners = Math.max(winners, scoresArray[i].innerHTML);
      }
    }
    for (var i = 0; i < scoresArray.length; i++)
    {
      console.log(scoresArray[i].innerHTML);
      console.log(winners);
      console.log(scoresArray[i].innerHTML == winners);
      if (scoresArray[i].innerHTML == winners)
      {
        if (i === 0)
        {
          winnersArray.push("You");
        }
        else
        {
          winnersArray.push("Player "+i);
        }
      }
    }
    console.log(winnersArray);
    if (winnersArray.length)
    {
      board.parentNode.removeChild(board);
      for (var i = 0; i < winnersArray.length; i++)
      {
        var winningMessage = document.createElement("div");
        winningMessage.setAttribute("class", "winningMessage");
        if (winnersArray[i] === "You")
        {
          winningMessage.innerHTML=winnersArray[i]+" win!";
          console.log(winnersArray[i]+" win!");
        }
        else
        {
          winningMessage.innerHTML=winnersArray[i]+" wins!";
          console.log(winnersArray[i]+" wins!");
        }
        body.appendChild(winningMessage);
        console.log(winners);
      }
      var playAgain = document.createElement("div");
      playAgain.setAttribute("id", "playAgain");
      playAgain.innerHTML="Play Again?";
      playAgain.addEventListener("click", function()
      {
        location.reload();
      });
      body.appendChild(playAgain);
    }
  }
}
