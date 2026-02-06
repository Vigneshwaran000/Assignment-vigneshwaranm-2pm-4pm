function counter() {

  let count = 0; // Outer variable

  return function () {
    count++;
    console.log(count);
  };

}

let myCounter = counter();

myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
