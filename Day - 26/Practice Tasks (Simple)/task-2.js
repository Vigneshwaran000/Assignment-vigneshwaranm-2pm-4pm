function createCounter() {

  let count = 0; // Outer variable

  return function () {
    count++;
    console.log("Count:", count);
  };

}

let counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
