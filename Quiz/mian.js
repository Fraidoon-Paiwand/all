document.getElementById("btn").addEventListener("click" , btnClicked);

function btnClicked () {
  let mass = document.getElementById("mass-in").value;
  let speed = document.getElementById("speed-in").value;

  let math = 1 / 2 * mass * speed ** 2

  document.getElementById("output").innerHTML = math ;
}