function fakeAPI() {

  return new Promise(function (resolve, reject) {

    console.log("Loading...");

    setTimeout(() => {

      let success = true;

      if (success) {
        resolve("Data Received from Server");
      } else {
        reject("Server Error");
      }

    }, 2000);

  });

}

fakeAPI()
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));
