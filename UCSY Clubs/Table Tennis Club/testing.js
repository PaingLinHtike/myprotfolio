function changePage() {
  // Add a class for fade-out effect
  document.body.classList.add("fade-out");

  // Wait for the animation to complete before changing the page
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500); // Adjust the duration (in milliseconds) based on your transition effect
}

// Add a listener for the animation end event
document.body.addEventListener("animationend", function () {
  // Remove the fade-out class and add the fade-in class
  document.body.classList.remove("fade-out");
  document.body.classList.add("fade-in");
});
