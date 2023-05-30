document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let num = document.getElementById("number-in").value;

  if (num === "1") {
    document.getElementById("o").innerHTML = "1st";
  } else if (num === "2") {
    document.getElementById("o").innerHTML = "2nd";
  } else if (num === "3") {
    document.getElementById("o").innerHTML = "3rd";
  } else if (num.length >= 2) {
    document.getElementById("o").innerHTML =
      "Please put something in between 1 and 9  then click";
  } else if (num >= 4 || 4 >= 9) {
    document.getElementById("o").innerHTML = `${
      document.getElementById("number-in").value + "th"
    }`;
  }
}
