let youHand = document.querySelector(".you_hand");
let aiHand = document.querySelector(".ai_hand");
let restart = document.querySelector(".restart");
let next = document.querySelector(".next");
let buttons = document.querySelector(".buttons");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let nothing = document.querySelector(".nothing");


let aiArr = ["Rock", "Paper", "Secisor"];

function ai(random) {
  aiHand.innerHTML = `<img src="./src/img/ai${aiArr[random]}.png" alt="" />`;
}

function addClass() {
  buttons.classList.add("dn");
  next.classList.remove("dn");
  restart.classList.remove("dn");
}

function delClass() {
  youHand.innerHTML = `<img src="./src/img/you_hand.png" alt="" />`;
  aiHand.innerHTML = `<img src="./src/img/ai_hand.png" alt="" />`;
  buttons.classList.remove("dn");
  nothing.classList.add("dn");
  win.classList.add("dn");
  lose.classList.add("dn");
  next.classList.add("dn");
  restart.classList.add("dn");
}

export {ai, addClass, delClass}