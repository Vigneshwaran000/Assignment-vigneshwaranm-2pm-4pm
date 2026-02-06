function showNotification(message, delay) {

  console.log("Waiting for notification...");

  setTimeout(() => {
    console.log("🔔 Notification:", message);
  }, delay);

}

showNotification("You have a new message!", 3000);
