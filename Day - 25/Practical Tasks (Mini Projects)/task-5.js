function loginUser(username, password) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (username === "admin" && password === "1234") {
        resolve("Login Successful");
      } else {
        reject("Invalid Credentials");
      }

    }, 2000);

  });

}

function getProfile() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve("Profile Loaded");
    }, 1500);

  });

}

async function loginSystem() {

  try {

    let login = await loginUser("admin", "1234");
    console.log(login);

    let profile = await getProfile();
    console.log(profile);

    console.log("Welcome User 🎉");

  }
  catch (err) {
    console.log("Login Failed:", err);
  }

}

loginSystem();
