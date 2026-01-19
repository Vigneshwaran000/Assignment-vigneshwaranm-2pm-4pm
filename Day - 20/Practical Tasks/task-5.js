// Student class
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`);
  }
}

// Create student objects
const s1 = new Student("cheta", 101);
const s2 = new Student("bala", 102);
const s3 = new Student("Vignesh", 103);

// Add method using prototype
Student.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};

// Works for ALL students (existing & future)
s1.sayHello();
s2.sayHello();
s3.sayHello();
