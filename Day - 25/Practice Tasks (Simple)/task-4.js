let myPromise = new Promise(function (resolve, reject) {

  let success = true;

  if (success) {
    resolve("Data Loaded");
  } else {
    reject("Error Loading");
  }

});

myPromise.then(function (result) {
  console.log(result);
});
