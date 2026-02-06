function fakeAPI() {

  return new Promise((resolve, reject) => {

    console.log("Fetching data...");

    setTimeout(() => {

      let success = true;

      if (success) {
        resolve("Server Data Received ✅");
      } else {
        reject("Server Error ❌");
      }

    }, 2000);

  });

}

fakeAPI()
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));
