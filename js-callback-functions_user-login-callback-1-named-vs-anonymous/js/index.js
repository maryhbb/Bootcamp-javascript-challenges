console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome! You are logged in now");
}

// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  // console.log("Welcome! You are logged in now");
  showWelcomeMessage();
});
