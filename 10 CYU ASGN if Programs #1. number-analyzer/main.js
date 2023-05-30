document.getElementById("btn").addEventListener("click", Analyzer);
// Solution functions...
function Analyzer() {
  // USE BINARY IF STATEMENT
  let num = document.getElementById("num");
  let o = document.getElementById("output")

  if (num / 2 === 0) {
    o.innerHTML = "Even";
  } else if (num === 0) {
    o.innerHTML = "Zero"
  } else  {
    o.innerHTML = "Odd"

  }
}

