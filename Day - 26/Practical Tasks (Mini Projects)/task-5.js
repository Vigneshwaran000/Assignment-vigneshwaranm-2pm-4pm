function loginUser(username, password) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (username === "admin" && password === "1234") {
        resolve("Login Successful ✅");
      } else {
        reject("Invalid Username or Password ❌");
      }

    }, 2000);

  });

}

function loadDashboard() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve("Dashboard Loaded 📊");
    }, 1500);

  });

}

async function startApp() {

  try {

    let loginMsg = await loginUser("admin", "1234");
    console.log(loginMsg);

    let dashboard = await loadDashboard();
    console.log(dashboard);

    console.log("Welcome to the App 🎉");

  }
  catch (err) {
    console.log("Access Denied:", err);
  }

}

startApp();
