function validateForm(name, email) {

  try {

    if (name === "" || email === "") {
      throw "All fields are required!";
    }

    console.log("Form Submitted Successfully");

  }
  catch (err) {
    console.log("Error:", err);
  }

}

validateForm("Vicky", ""); // Error
