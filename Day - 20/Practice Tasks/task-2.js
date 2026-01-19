const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  
  describe() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    );
  }
};

// Call the method
book.describe();
