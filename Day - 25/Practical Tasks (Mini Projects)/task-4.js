async function fetchData() {

  try {

    let result = await fakeAPI();
    console.log("Result:", result);

  }
  catch (err) {
    console.log("Failed:", err);
  }

}

fetchData();
