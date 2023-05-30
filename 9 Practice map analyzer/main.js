// SOLUTIONS TO MAP ANALYZER LEVELS

// GLOBAL VARIABLE
let row, column; // ROW & Column of Mouse on the Map
let outputE1 = document.getElementById("currentTile");

// Solution functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 4) {
    outputE1.innerHTML = "sand";
  } else {
    outputE1.innerHTML = "water";
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 2) {
    outputE1.innerHTML = "hills";
  } else if (column <= 7) {
    outputE1.innerHTML = "sand";
  } else {
    outputE1.innerHTML = "water";
  }
}

function level3Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 4) {
    outputE1.innerHTML = "sand";
  } else {
    outputE1.innerHTML = "water";
  }
}
