function getLocation() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition);

  } else {

    console.log("Geolocation not supported");

  }

}

function showPosition(position) {

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  console.log("Latitude:", lat);
  console.log("Longitude:", lon);

}

getLocation();
