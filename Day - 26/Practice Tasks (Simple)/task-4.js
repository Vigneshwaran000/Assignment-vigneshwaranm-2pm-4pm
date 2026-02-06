function getData() {

  return new Promise((resolve, reject) => {

    let success = true;

    if (success) {
      resolve("Data Loaded Successfully");
    } else {
      reject("Failed to Load Data");
    }

  });

}

getData()
  .then(result => console.log(result))
  .catch(err => console.log("Error:", err));
