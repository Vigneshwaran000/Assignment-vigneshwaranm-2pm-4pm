let age = 15;

try {
   if (age < 18) {
      throw "Not Eligible to Vote";
   }
   console.log("You can vote");
}
catch(err) {
   console.log("Error:", err);
}
