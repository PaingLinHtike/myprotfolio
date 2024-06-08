function confirmLogout() {
    if (confirm("Do you want to log out?")) {
        window.location.href = "index.html"; // Link for Yes button
    } else {
        // Do nothing or redirect to another page for Cancel
        window.location.href = "index1.html"; // Link for Cancel button
    }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}