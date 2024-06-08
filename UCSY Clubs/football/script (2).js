
  document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.querySelector(".form-class");

    // Add an event listener for the form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Validate form fields (you can add more specific validation as needed)
      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const streetAddress = document.getElementById("street-address").value.trim();
      // Add more field validations as needed

      if (!firstName || !lastName || !streetAddress) {
        alert("Please fill in all required fields.");
        return;
      }

      // If all validations pass, you can perform further actions, such as sending data to a server or displaying a success message
      alert("Form submitted successfully!");
    });
  });
