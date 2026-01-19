class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`);
  }
}

const s1 = new Student("cheta", 101);
const s2 = new Student("bala", 102);
const s3 = new Student("Vignesh", 103);

s1.display();
s2.display();
s3.display();
