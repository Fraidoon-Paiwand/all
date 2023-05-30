// MAD LIB BY MR. V


// BUTTON EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);


function btnClicked() {
  // Input
  let family = document.getElementById("family-in").value;
  let noun = document.getElementById("noun-in").value;
  let action = document.getElementById("action-in").value;


  // Process
  let story = `My ${family} loves to eat ${noun} and then ${action}.`;


  // Output
  document.getElementById("output").innerHTML = story;
}
