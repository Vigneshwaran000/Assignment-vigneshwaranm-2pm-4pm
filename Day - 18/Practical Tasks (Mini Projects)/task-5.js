// Shopping Cart Total Calculator

let Prices = [100,250,75,50,30,599,19,29];
let Total = 0;

for(let i = 0; i < Prices.length; i++){
    Total += Prices[i];
}

console.log("Total Amount:", Total);