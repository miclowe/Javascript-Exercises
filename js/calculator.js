function calculator(num1, num2, operand) {
  // console.log(num1);
  // console.log(num2);
  // console.log(operand);

  switch(operand)
  {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
console.log(result);
}

do {
var num1 = parseInt(prompt("Enter number 1"), 10);
}
while (isNaN(num1))


var num2 = parseInt(prompt("Enter number 2"), 10);
var operand = prompt("Enter operand");

calculator(num1, num2, operand);