fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {

    data.forEach(user => {
      console.log("Email:", user.email);
    });

  })
  .catch(err => console.log("Error:", err));
