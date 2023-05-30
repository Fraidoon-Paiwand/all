//  COIN FLIP SIMULATOR

let out = document.getElementById("output");
// BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //   GENERATE A Random Number
  let randnum = Math.random();
  console.log(randnum);

  if (randnum < 0.5) {
    out.innerHTML = "<img src='heads.png' />";
  } else {
    out.innerHTML = "<img src='tails.png' />";
  }
}
