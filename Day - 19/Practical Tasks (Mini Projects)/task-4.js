//Using forEach

let numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
  console.log(num * 2);
});

//Using map

let doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);
