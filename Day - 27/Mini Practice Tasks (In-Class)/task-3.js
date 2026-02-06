window.onload = function () {

  let name = localStorage.getItem("username");

  if (name) {
    console.log("Welcome back,", name);
  } else {
    console.log("No user found");
  }

};
