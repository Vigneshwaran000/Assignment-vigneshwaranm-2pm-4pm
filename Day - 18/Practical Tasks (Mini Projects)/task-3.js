// Login Attempt System (do…while)

let correctPassword = "1234";
let enteredPassword = "0000";

do {
  console.log("Wrong password, try again");
  enteredPassword = "1234"; // simulate user input
} while (enteredPassword !== correctPassword);

console.log("Login successful!");
