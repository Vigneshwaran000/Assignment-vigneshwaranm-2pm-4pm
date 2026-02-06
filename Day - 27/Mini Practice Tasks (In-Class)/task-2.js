function saveName() {

  let name = "Vigneshwaran";

  localStorage.setItem("username", name);

  console.log("Name Saved!");
}

saveName();
