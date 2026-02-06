try {
   let a = 10;
   console.log(a / b); // b not defined
}
catch(err) {
   console.log("Error Found:", err.message);
}
finally {
   console.log("Program Finished");
}
