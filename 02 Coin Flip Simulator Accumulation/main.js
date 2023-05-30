//  COIN FLIP SIMULATOR

let out = document.getElementById("output");
let headsEl = document.getElementById("head-out");
let tailsEl = document.getElementById("tails-out");
// BUTTON EVENT LISTENER

// Count Varibles
let numHeads = 0;
let numTails = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //   GENERATE A Random Number
  let randnum = Math.random();
  console.log(randnum);

  if (randnum < 0.5) {
    out.innerHTML = "<img src='heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    out.innerHTML = "<img src='tails.png' />";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}
