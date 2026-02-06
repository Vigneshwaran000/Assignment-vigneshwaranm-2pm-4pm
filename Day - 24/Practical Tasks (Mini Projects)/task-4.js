function login(username, password) {

  try {

    if (username === "" || password === "") {
      throw "Username and Password required";
    }

    if (password.length < 6) {
      throw "Password must be 6+ characters";
    }

    console.log("Login Successful");

  }
  catch (err) {
    console.log("Login Failed:", err);
  }

}

login("admin", "123");     // Error
login("admin", "123456");  // Success
