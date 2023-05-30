document.getElementById("btn").addEventListener("click", BtnClicked);

let ins;

function BtnClicked() {
  let in1 = document.getElementById("in-1").value.toLowerCase();
  let in2 = document.getElementById("in-2").value.toLowerCase();
  let in3 = document.getElementById("in-3").value.toLowerCase();
  let in4 = document.getElementById("in-4").value.toLowerCase();
  let in5 = document.getElementById("in-5").value.toLowerCase();

  let o1 = document.getElementById("o1");
  let o2 = document.getElementById("o2");
  let o3 = document.getElementById("o3");
  let o4 = document.getElementById("o4");
  let o5 = document.getElementById("o5");

  ins = 0;

  // in1 = Input one
  if (in1 === "three" || in1 === "iii" || in1 === "3") {
    o1.innerHTML = "correct";
    o1.style.color = "green";
    document.getElementById("in-1").style.backgroundColor = "green";
    ins++;
  } else if (in1 === "") {
    o1.innerHTML = "Please answer this question";
    document.getElementById("in-1").style.backgroundColor = "yellow";
  } else {
    o1.innerHTML = "incorrect or Wrong";
    document.getElementById("in-1").style.backgroundColor = "red";
    o1.style.color = "red";
  }
  // in2 = Input Two
  if (in2 === "folder" || in2 === "files" || in2 === "folders") {
    o2.innerHTML = "correct";
    o2.style.color = "green";
    document.getElementById("in-2").style.backgroundColor = "green";
    ins++;
  } else if (in2 === "") {
    o2.innerHTML = "Please answer this question";
    document.getElementById("in-2").style.backgroundColor = "yellow";
  } else {
    o2.innerHTML = "incorrect or Wrong";
    document.getElementById("in-2").style.backgroundColor = "red";
    o2.style.color = "red";
  }

  // in3 = Input Three
  if (in3 === "open" || in3 === "use" || in3 === "open it") {
    o3.innerHTML = "correct";
    o3.style.color = "green";
    document.getElementById("in-3").style.backgroundColor = "green";
    ins++;
  } else if (in3 === "") {
    o3.innerHTML = "Please answer this question";
    document.getElementById("in-3").style.backgroundColor = "yellow";
  } else {
    o3.innerHTML = "incorrect or Wrong";
    document.getElementById("in-3").style.backgroundColor = "red";
    o3.style.color = "red";
  }

  // in4 = Input Four
  if (
    in4 === "explorer" ||
    in4 === "under the symbol of visual studio code" ||
    in4 === "top left corner" ||
    in4 === "above the search"
  ) {
    o4.innerHTML = "Correct";
    document.getElementById("in-4").style.backgroundColor = "green";
    ins++;
    o4.style.color = "green";
  } else if (in4 === "") {
    o4.innerHTML = "Please answer this question";
    document.getElementById("in-4").style.backgroundColor = "yellow";
  } else {
    o4.innerHTML = "incorrect or Wrong";
    document.getElementById("in-4").style.backgroundColor = "red";
    o4.style.color = "red";
  }

  // in5 = Input Five
  if (
    in5 === "a" ||
    in5 === "by using a tags" ||
    in5 === "a and href" ||
    in5 === "a tag" ||
    in5 === "a tags"
  ) {
    o5.innerHTML = "correct";
    o5.style.color = "green";
    document.getElementById("in-5").style.backgroundColor = "green";
    ins++;
  } else if (in5 === "") {
    o5.innerHTML = "Please answer this question";
    document.getElementById("in-5").style.backgroundColor = "yellow";
  } else {
    o5.innerHTML = "incorrect or Wrong";
    document.getElementById("in-5").style.backgroundColor = "red";
    o5.style.color = "red";
  }

  if (in1 === "" && in2 === "" && in3 === "" && in4 === "" && in5 === "") {
    o1.innerHTML = "Please answer the questions";
    o2.innerHTML = "Please answer the questions";
    o3.innerHTML = "Please answer the questions";
    o4.innerHTML = "Please answer the questions";
    o5.innerHTML = "Please answer the questions";

    o1.style.color = "yellow";
    o2.style.color = "yellow";
    o3.style.color = "yellow";
    o4.style.color = "yellow";
    o5.style.color = "yellow";
  }

  let math = Math.round((ins / 5) * 100);
  document.getElementById("score").innerHTML = "Score " + ins + "/5";
  document.getElementById("percent-in").innerHTML = "Percentage " + math;
}

let msg = `Answer of questions <br><br> Q1 Answer = 3 , three , iii . <br> Q2 Answer = folder , files , folders .<br>
Q3 Answer = open , use , open it . <br> Q4 Answer = explorer , under the symbol of visual studio code , top left corner , above the search .
<br> Q5 Answer = a , by using a tags , a and href , a tag , a tags`;
document.getElementById("btn2").addEventListener("click", btn2cliked);

function btn2cliked() {
  document.getElementById("answer").innerHTML = msg;
}
