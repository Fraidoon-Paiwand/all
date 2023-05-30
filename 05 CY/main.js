let aa = document.getElementById("output");

document.getElementById("btn").addEventListener("click", ballBtnClicked);

function ballBtnClicked() {
  let inp = document.getElementById("inputa").value.toLowerCase();

  if (inp === "does a magic 8 ball atually work?") {
    aa.innerHTML = "How dare you doubt me!";
  } else if (inp === "is javescipt awesome?") {
    aa.innerHTML = "Of Course!";
  } else if (inp === "") {
    aa.innerHTML = "Please ask a question...";
  } else {
    let randnum = Math.random();
    console.log(randnum);
    if (randnum < 0.2) {
      aa.innerHTML = "Without a Doubt.";
    } else if (randnum < 0.4) {
      aa.innerHTML = "As I see it, yes.";
    } else if (randnum < 0.6) {
      aa.innerHTML = "Concentrate and ask again.";
    } else if (randnum < 0.8) {
      aa.innerHTML = "Don't count on it.";
    } else {
      aa.innerHTML = "Outlook not so good.";
    }
  }
}
