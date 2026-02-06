function calculator(a, b, operator) {

  try {

    if (isNaN(a) || isNaN(b)) {
      throw "Enter valid numbers";
    }

    if (operator === "/" && b === 0) {
      throw "Cannot divide by zero";
    }

    let result;

    switch (operator) {
      case "+":
        result = a + b;
        break;

      case "-":
        result = a - b;
        break;

      case "*":
        result = a * b;
        break;

      case "/":
        result = a / b;
        break;

      default:
        throw "Invalid Operator";
    }

    console.log("Result:", result);

  }
  catch (err) {
    console.log("Error:", err);
  }

}

calculator(10, 0, "/"); // Error
calculator(5, 2, "+");  // 7
