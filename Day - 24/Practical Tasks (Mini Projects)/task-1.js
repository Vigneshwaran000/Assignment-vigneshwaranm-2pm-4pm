function checkNumber(value) {

  try {

    if (value === "") {
      throw "Input is Empty";
    }

    if (isNaN(value)) {
      throw "Not a Number";
    }

    console.log("Valid Number:", value);

  }
  catch (err) {
    console.log("Error:", err);
  }

}

checkNumber("25");   // Valid
checkNumber("");     // Error
checkNumber("abc");  // Error
