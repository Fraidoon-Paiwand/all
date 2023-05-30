// Pizza Order by Mr.Fraidoon

// Add a event listener to the button to run the placeorder function
document.getElementById("btn").addEventListener("click", placeOrder);
// store order sode in a function
function placeOrder() {
  // INPUT
  let size = prompt("Enter size of Pizza (small, medium,  large)");
  let topping1 = prompt("Enter first topping:");
  let topping2 = prompt("Enter second topping:");

  // PROCESS
  let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  // OUTPUT
  alert(msg);
}
