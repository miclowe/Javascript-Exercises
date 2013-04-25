function calculator(num1, num2, operand) {
  // console.log(num1);
  // console.log(num2);
  // console.log(operand);
  var result = 0;
  switch(operand)
  {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      result = num1 / num2;
      break;
  }
console.log(result);
}

do {
var num1 = parseInt(prompt("Enter number 1"), 10);
}
while (isNaN(num1))

do {
var num2 = parseInt(prompt("Enter number 2"), 10);
}
while (isNaN(num2))

do {
var operand = prompt("Select type of operation: \n 1: Addition \n 2: Subtraction \n 3: Muliplication \n 4: Division");
}
while (operand != "1" && operand != "2" && operand != "3" && operand != "4")
calculator(num1, num2, operand);