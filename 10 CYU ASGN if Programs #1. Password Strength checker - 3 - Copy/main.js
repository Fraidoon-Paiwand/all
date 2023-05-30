document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let nam = document.getElementById("password").value;
  if (nam.length === 0) {
  } else if (nam.length <= 4) {
    document.getElementById("o").innerHTML = "Weak";
    document.getElementById("ab").style.backgroundColor = "red";
  } else if (nam.length <= 8) {
    document.getElementById("o").innerHTML = "Okay";
    document.getElementById("ab").style.backgroundColor = "orange";
  } else if (nam.length <= 12) {
    document.getElementById("o").innerHTML = "Strong";
    document.getElementById("ab").style.backgroundColor = "lime";
  } else if (nam.length <= 13) {
    document.getElementById("o").innerHTML = "Very Strong";
    document.getElementById("ab").style.backgroundColor = "green";
  }
}
