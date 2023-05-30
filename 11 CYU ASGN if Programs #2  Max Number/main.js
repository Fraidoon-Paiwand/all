document.getElementById("btn").addEventListener("click", btnClicked);




function btnClicked() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  Math.max(num1 ,num2 , num3);

  if (Math.max === num1) {
    document.getElementById("o-o").innerHTML = num1;
    document.getElementById("ab-in").style.backgroundColor = "green";
  } else if (Math.max === num2) {
    document.getElementById("o-o").innerHTML = num2;
    document.getElementById("ab-in").style.backgroundColor = "blue";
  } else if (Math.max === num3) {
    document.getElementById("o-o").innerHTML = num3;
    document.getElementById("ab-in").style.backgroundColor = "yellow";
  }

  // if (num1 > (num2, num3)) {
  //   document.getElementById("o").innerHTML = "Number 1 is Max";
  //   document.getElementById("ab").style.backgroundColor = "green";
  // } else if (num2 > (num1, num3)) {
  //   document.getElementById("o").innerHTML = "Number 2 is Max";
  //   document.getElementById("ab").style.backgroundColor = "blue";
  // } else if (num3 > (num2, num1)) {
  //   document.getElementById("o").innerHTML = "Number 3 is Max";
  //   document.getElementById("ab").style.backgroundColor = "yellow";
  // }
}
