let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let youHand = document.querySelector(".you_hand");
let restart = document.querySelector(".restart");
let next = document.querySelector(".next");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let nothing = document.querySelector(".nothing");
let aiCount = document.querySelector(".ai_count");
let youCount = document.querySelector(".you_count");

let aiArr = ["Rock", "Paper", "Secisor"];

import { ai, addClass, delClass } from "./func.js";

let i = 0;
rock.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aiArr.length);
  ai(random);
  youHand.innerHTML = `<img src="./src/img/youRock.png" alt="" />`;
  i++;
  if (random === 0) {
    addClass();
    nothing.classList.remove("dn");
  } else if (random === 1) {
    addClass();
    lose.classList.remove("dn");
    aiCount.textContent = Number(aiCount.textContent) + 1;
  } else if (random === 2) {
    addClass();
    win.classList.remove("dn");
    youCount.textContent = Number(youCount.textContent) + 1;
  }
});

paper.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aiArr.length);
  ai(random);
  i++;
  youHand.innerHTML = `<img src="./src/img/youPaper.png" alt="" />`;
  if (random === 0) {
    addClass();
    win.classList.remove("dn");
    youCount.textContent = Number(youCount.textContent) + 1;
  } else if (random === 1) {
    addClass();
    nothing.classList.remove("dn");
  } else if (random === 2) {
    addClass();
    lose.classList.remove("dn");
    aiCount.textContent = Number(aiCount.textContent) + 1;
  }
});

scissors.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aiArr.length);
  ai(random);
  i++;
  youHand.innerHTML = `<img src="./src/img/youSecisor.png" alt="" />`;
  if (random === 0) {
    addClass();
    lose.classList.remove("dn");
    aiCount.textContent = Number(aiCount.textContent) + 1;
  } else if (random === 1) {
    addClass();
    win.classList.remove("dn");
    youCount.textContent = Number(youCount.textContent) + 1;
  } else if (random === 2) {
    addClass();
    nothing.classList.remove("dn");
  }
});

restart.addEventListener("click", () => {
  delClass();
  aiCount.textContent = 0;
  youCount.textContent = 0;
});

next.addEventListener("click", () => {
  delClass();
});
