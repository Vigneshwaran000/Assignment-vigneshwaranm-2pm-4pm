async function fetchData() {

  try {

    let result = await getData();
    console.log(result);

  }
  catch (err) {
    console.log("Error:", err);
  }

}

fetchData();
