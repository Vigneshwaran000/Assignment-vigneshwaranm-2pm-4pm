class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ₹${this.salary}`);
  }
}

// Example usage
const emp1 = new Employee("Vignesh", 300000);
emp1.displayInfo();
