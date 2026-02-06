function delayedMessage(msg, time) {

  setTimeout(function () {
    console.log(msg);
  }, time);

}

delayedMessage("Hello after 3 seconds", 3000);
