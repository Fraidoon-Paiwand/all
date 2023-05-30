// Passcode checker

// Button Evet Listener
// document.getElementById("btn").addEventListener("click", btnClicked);

// function btnClicked() {
//   let code1 = +document.getElementById("code1-in").value;
//   let code2 = +document.getElementById("code2-in").value;
//   let code3 = +document.getElementById("code3-in").value;

//   // check passcode
//   if (code1 === 10 && code2 === 20 && code3 === 30) {
//     document.getElementById("status").style.backgroundColor = "green";
//   } else {
//     document.getElementById("status").style.backgroundColor = "red";
//   }
// }
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let code1 = +document.getElementById("code1-in").value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // check passcode
  if (code1 < 0 && code2 < 0 && code3 > 3) {
    document.getElementById("status").st;
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
}
