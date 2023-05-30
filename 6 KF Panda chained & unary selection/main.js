// Kung Fu Panda characters search by me

// button Event listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // get search input
  let name = document.getElementById("search-in").value.toLowerCase();

  //   Test the search Name
  if (name === "po" || name === "dragon warrior") {
    document.getElementById("char-info").innerHTML = `
    <img src="Po.jfif" alt="Kung Fu Panda characters" />
    <h2>Po</h2>
    <p class="quote">I am the Drongon Warrior</p>`;
  } else if (name === "mantis" || name === "master mantis") {
    document.getElementById("char-info").innerHTML = `
    <img src="mantis.jfif" alt="Kung Fu Panda characters" />
    <h2>Mantis</h2>
    <p class="quote">Fear the bug!</p>`;
  } else if (name === "monkey") {
    document.getElementById("char-info").innerHTML = `
    <img src="monkey,png" alt="Kung Fu Panda characters" />
    <h2>Monkey</h2>
    <p class="quote">We should hang out.</p>`;
  } else if (name === "tiger") {
    document.getElementById("char-info").innerHTML = `
    <img src="tiger.jfif" alt="Kung Fu Panda characters" />
    <h2>Po</h2>
    <p class="quote">hi I am tiger</p>`;
  }
}
