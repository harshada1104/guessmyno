document.querySelector(".again").addEventListener("click", function () {
  //this whole is about a single botton(again )
  score = 20; //resets the score to 20 again
  secretNumber = Math.trunc(Math.random() * 20) + 1; //regenerates the random number
  // document.querySelector(".number").textContent = "?";                  //the random number place will be taken by the (?)
  displayMessage("start guessing"); //the message is taken to the restarting of the game
  document.querySelector("body").style.backgroundColor = "#222"; //the background colour will be black again
  document.querySelector(".number").style.width = "15ren"; //the size of the random will be to its original
  document.querySelector(".score").textContent = score; //the score will be set to 20 again
  document.querySelector(".guess").value = ""; //the display screen will be blank screen again
  document.querySelector(".number").textContent = "?";
});

let secretNumber = Math.trunc(Math.random() * 20) + 1; //(math.random used to generate random number
//math.trunc is used to remove decimals)

let score = 20; //(here we created a variable score so that we can go on decrementing
let highscore = 0; //the score as soon as the user guess the wrong ans and the highscore for score the new highscore

//function for displaying message.
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(
    //*remember the value is in string to change to integer we added it*/
    document.querySelector(".guess").value
  );

  //conditions
  //1 when there is no input
  if (!guess) {
    displayMessage("no number");
    score--;
    document.querySelector(".score").textContent = score;
  }

  //2 when the guess is correct
  else if (guess === secretNumber) {
    displayMessage("correct number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347"; //changing the colour as soon as the guess is correct
    document.querySelector(".number").style.width = "30ren"; //changing the width of the number as soon as the guess is correct

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      score--; //terinary operator
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("u lost");
      document.querySelector(".score").textContent = 0;
    }
  }

  //3 when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "u lost";
  //   }
  // }

  // //4 when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "u lost";
  //     document.querySelector(".score").textContent=0;
  //   }
  // }
});
