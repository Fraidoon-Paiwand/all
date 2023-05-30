document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let nam = document.getElementById("password").value;
  let user = document.getElementById("username").value;

  if (nam === "1234" && user === "admin") {
    document.getElementById("o").innerHTML = "Login Successful";
    document.getElementById("ab").style.backgroundColor = "green";
  } else if (nam === "1234" && user) {
    document.getElementById("o").innerHTML = "Invalid Username";
    document.getElementById("ab").style.backgroundColor = "darkred";
  } else if (user === "admin") {
    document.getElementById("o").innerHTML = "Invalid Password";
    document.getElementById("ab").style.backgroundColor = "red";
  }
}
