"use strict";

let scores, roundScore, activePlayer, gamePlaying;
const init = function () {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.opacity = "0";
  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.querySelector("#name--0").textContent = "player 1";
  document.querySelector("#name--1").textContent = "player 2";
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");

  document.querySelector(".player--0").classList.remove("active");
  document.querySelector(".player--1").classList.remove("active");

  document.querySelector(".player--0").classList.add("active");
};

init();

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  roundScore = 0;
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
  document.querySelector(".dice").style.opacity = "0";
}

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceImg = document.querySelector(".dice");
    diceImg.style.opacity = "1";
    diceImg.src = "images/dice-" + dice + ".png";
    roundScore += dice;
    scores[activePlayer] += roundScore;

    if (dice !== 1) {
      var currentScore = document.querySelector("#current--" + activePlayer);
      currentScore.textContent = dice;

      document.querySelector(
        "#score--" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
  document.querySelector(".btn--roll").addEventListener("click", function () {
    if (gamePlaying) {
      scores[activePlayer] += roundScore;

      document.querySelector("#score--" + activePlayer).textContent =
        scores[activePlayer];
      if (scores[activePlayer] >= 20) {
        document.querySelector("#name--" + activePlayer).textContent = "winner";
        // document.querySelector(".dice").style.display = "none";
        document
          .querySelector(".player--" + activePlayer)
          .classList.add("player--winner");
        document
          .querySelector(".player--" + activePlayer)
          .classList.remove("active");
        gamePlaying = false;
      } else {
        nextPlayer();
      }
    }
  });
});

// currentScore.textContent = roundScore;

// document.querySelector(".btn--hold").addEventListener("click", function () {
//   if (gamePlaying) {
//     scores[activePlayer] += roundScore;

//     document.querySelector("#score--" + activePlayer).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 20) {
//       document.querySelector("#name--" + activePlayer).textContent = "winner";
//       document.querySelector(".dice").style.display = "none";
//       document
//         .querySelector(".player--" + activePlayer)
//         .classList.add("player--winner");
//       document
//         .querySelector(".player--" + activePlayer)
//         .classList.remove("active");
//       gamePlaying = true;
//     } else {
//       nextPlayer();
//     }
//   }
// });

document.querySelector(".btn--new").addEventListener("click", init);
