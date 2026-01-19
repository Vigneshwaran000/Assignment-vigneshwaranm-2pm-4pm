// Parent class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ₹${this.salary}`);
  }
}

// Child class
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Call Employee constructor
    this.department = department;
  }

  displayInfo() {
    super.displayInfo(); // Call parent method
    console.log(`Department: ${this.department}`);
  }
}

// Example usage
const mgr1 = new Manager("Anu", 1000000, "IT");
mgr1.displayInfo();


