let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let youHand = document.querySelector(".you_hand");
let aiHand = document.querySelector(".ai_hand");
let restart = document.querySelector(".restart");
let next = document.querySelector(".next");
let buttons = document.querySelector(".buttons");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let nothing = document.querySelector(".nothing");
let aiCount = document.querySelector(".ai_count");
let youCount = document.querySelector(".you_count");

let aiArr = ["rock", "paper", "scissors"];

function ai(random) {
  if (random == 2) {
    aiHand.innerHTML = `<img src="./src/img/aiSecisor.png" alt="" />`;
  } else if (random == 1) {
    aiHand.innerHTML = `<img src="./src/img/aiPaper.png" alt="" />`;
  } else {
    aiHand.innerHTML = `<img src="./src/img/aiRock.png" alt="" />`;
  }
}
let i = 0;
rock.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aiArr.length);
  ai(random);
  youHand.innerHTML = `<img src="./src/img/youRock.png" alt="" />`;
  i++;
  if (random == 0) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    nothing.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
  } else if (random == 1) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    lose.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
    aiCount.textContent =  Number(aiCount.textContent) + 1;
  } else if (random == 2) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    win.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
    youCount.textContent = Number(youCount.textContent) + 1;
  }
});

paper.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aiArr.length);
  ai(random);
  i++;
  youHand.innerHTML = `<img src="./src/img/youPaper.png" alt="" />`;
  if (random == 0) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    win.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
    youCount.textContent = Number(youCount.textContent) + 1;
  } else if (random == 1) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    nothing.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
  } else if (random == 2) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    lose.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
    aiCount.textContent = Number(aiCount.textContent) + 1;
  }
});

scissors.addEventListener("click", () => {
  let random = Math.floor(Math.random() * aiArr.length);
  ai(random);
  i++;
  youHand.innerHTML = `<img src="./src/img/youSecisor.png" alt="" />`;
  if (random == 0) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    lose.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
    aiCount.textContent = Number(aiCount.textContent) + 1;
  } else if (random == 1) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    win.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
    youCount.textContent = Number(youCount.textContent) + 1;
  } else if (random == 2) {
    buttons.classList.add("fdc");
    rock.classList.add("dn");
    paper.classList.add("dn");
    scissors.classList.add("dn");
    nothing.classList.remove("dn");
    next.classList.remove("dn");
    restart.classList.remove("dn");
  }
});

restart.addEventListener("click", () => {
  youHand.innerHTML = `<img src="./src/img/you_hand.png" alt="" />`;
  aiHand.innerHTML = `<img src="./src/img/ai_hand.png" alt="" />`;
  buttons.classList.remove("fdc");
  rock.classList.remove("dn");
  paper.classList.remove("dn");
  scissors.classList.remove("dn");
  nothing.classList.add("dn");
  win.classList.add("dn");
  lose.classList.add("dn");
  next.classList.add("dn");
  restart.classList.add("dn");
  aiCount.textContent = 0
  youCount.textContent = 0
});

next.addEventListener('click' , () => {
    youHand.innerHTML = `<img src="./src/img/you_hand.png" alt="" />`;
    aiHand.innerHTML = `<img src="./src/img/ai_hand.png" alt="" />`;
    buttons.classList.remove("fdc");
    rock.classList.remove("dn");
    paper.classList.remove("dn");
    scissors.classList.remove("dn");
    nothing.classList.add("dn");
    win.classList.add("dn");
    lose.classList.add("dn");
    next.classList.add("dn");
    restart.classList.add("dn");
})
