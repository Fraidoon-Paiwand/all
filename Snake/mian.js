// let vowels = ["a", "e", "i", "o", "u", "y"];

// console.log(vowels[1]);
// console.log(vowels[2]);
// console.log(vowels[5]);
// console.log(vowels[6]);
// console.log(vowels.length);

// let nums = ["Odd #'s", 1, 7, 11, 5];

// nums[0] = "Even #'s";
// nums[1]++;
// nums[2] += 5;
// nums[3]--;
// nums[4] *= 2;
// console.log(nums);

// let msg = ["Caleb", "and", "Clara", "ate", 2, "yellow", "bananas", "today"];

// msg.pop();
// msg.push("yesterday");
// msg[4] += 18;
// msg[5] = "brown";
// msg.splice(2, 1);
// msg.splice(1, 1);
// console.log(msg);

// let randomArry = [];
// for (let _ = 1; _ <= 500; _++) {
//   randomArry.push(randomint(100, -100));
// }

// let patternArry = [];
// for (let n = 1; n <= 800; n += 20) {
//   randomArry.push(randomint(100, -100));
// }

let pEls = document.querySelectorAll("p");

let btn1 = document.getElementById("1").value;
let btn2 = document.getElementById("2").value;
let btn3 = document.getElementById("3").value;
let btn4 = document.getElementById("4").value;
let btn5 = document.getElementById("5").value;
let btn6 = document.getElementById("6").value;
let btn7 = document.getElementById("7").value;

let mystr = "blue, red, yellow ,white ,black ,orange ,green,pink";
let mystr2 = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg";
let randomArry1 = [];
for (let a1 = 1; a1 <= 700; a1++) randomArry1.push("JOY");
document.getElementById("1").addEventListener("click", a);

function a() {
  console.log(randomArry1);
}

document.getElementById("2").addEventListener("click", b);

function b() {}

document.getElementById("3").addEventListener("click", c);

function c() {}

document.getElementById("4").addEventListener("click", d);

function d() {}

document.getElementById("5").addEventListener("click", e);

function e() {}

document.getElementById("6").addEventListener("click", f);

function f() {
  myArray = mystr.split(",");
  console.log(myArray);
}

document.getElementById("7").addEventListener("click", g);

function g() {
  myArray2 = mystr2.split(";");
  console.log(myArray2);
}
