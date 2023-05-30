// Pizza Order by Mr.Fraidoon

// Add a event listener to the button to run the placeorder function
document.getElementById("btn").addEventListener("click", MadLid);
// store order sode in a function
function MadLid() {
  // INPUT
  let f = document.getElementById("f").value;
  let m = document.getElementById("m").value;
  let v = document.getElementById("v").value;

  // PROCESS
  let msg = `your ${f} loves to eat ${m} and ${v}`;

  // OUTPUT
  document.getElementById("output").innerHTML = msg;
  // alert(msg);
}
