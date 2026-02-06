async function loadData() {

  try {

    let data = await fakeAPI();
    console.log("Loaded:", data);

  }
  catch (err) {
    console.log("Loading Failed:", err);
  }

}

loadData();
