"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, curentscore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  curentscore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
init();
const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
//roll
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Tạo xx ngẫu nhiên
    const dice1 = Math.trunc(Math.random() * 6) + 1;
    console.log(dice1);
    //2. Hiển thị điểm xx
    dice.classList.remove("hidden");
    dice.src = `dice-${dice1}.png`;
    //3.check for rolled 1: if true, chuyển sang đối phương
    if (dice1 !== 1) {
      //tung tiếp
      curentscore += dice1;
      document.getElementById(`current--${activePlayer}`).textContent =
        curentscore;
    } else {
      switchplayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //1.cộng điểm, lưu điểm vào người chơi
    scores[activePlayer] += curentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //2.kiểm tra xem >=100 ==> finish game
      playing = false;
      dice.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchplayer();
    }
  }
  //3
  btnNew.addEventListener("click", init);
});
