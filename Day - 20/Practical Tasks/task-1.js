class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    return this.price - (this.price * discountPercent) / 100;
  }
}

// Example
const p1 = new Product("Laptop", 50000);
console.log(p1.discountedPrice(10)); // 45000
