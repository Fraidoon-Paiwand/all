// Functionize Minecraft Fishing Start Code

// HTML Varibles
let rimg = document.getElementById("result-img");
let numSodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
// Fish Count Varibles
let numcod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("chracter-select");

  if (character === "Steve") {
    //  Fish with Steve

    // Steve Fish Simulator
    let randnum = Math.random();
    console.log(randnum);
    if (randnum < 0.7) {
      rimg.src = "Raw-cod.png";
      numcod = numcod + 1;
      numSodSpan.innerHTML = numcod;
    } else if (randnum < 0.9) {
      rimg.src = "Raw-Salmon.png";
      numSalmon += 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randnum < 0.95) {
      rimg.src = "Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      rimg.src = "Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Fish with Alex

    // Alex Fish Simulator
    let randnum = Math.random();
    console.log(randnum);
    if (randnum < 0.1) {
      rimg.src = "Raw-cod.png";
      numcod = numcod + 1;
      numSodSpan.innerHTML = numcod;
    } else if (randnum < 0.2) {
      rimg.src = "Raw-Salmon.png";
      numSalmon += 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randnum < 0.5) {
      rimg.src = "Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      rimg.src = "Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else {
    // Fish with Village

    // Village Fish Simulator
    let randnum = Math.random();
    console.log(randnum);
    if (randnum < 0.25) {
      rimg.src = "Raw-cod.png";
      numcod = numcod + 1;
      numSodSpan.innerHTML = numcod;
    } else if (randnum < 0.5) {
      rimg.src = "Raw-Salmon.png";
      numSalmon += 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randnum < 0.75) {
      rimg.src = "Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      rimg.src = "Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}
