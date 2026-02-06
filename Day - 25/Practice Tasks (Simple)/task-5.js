function getData() {

  return new Promise(function (resolve, reject) {

    setTimeout(() => {
      resolve("Data Received");
    }, 2000);

  });

}

async function showData() {

  try {

    let result = await getData();
    console.log(result);

  }
  catch (err) {
    console.log("Error:", err);
  }

}

showData();
