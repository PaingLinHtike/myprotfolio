// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", () => {
//   navbar.classList.toggle("showInput");
//   if (navbar.classList.contains("showInput")) {
//     searchBox.classList.replace("bx-search", "bx-x");
//   } else {
//     searchBox.classList.replace("bx-x", "bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function () {
//   navLinks.classList.toggle("show1");
// };
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// };
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function () {
//   navLinks.classList.toggle("show3");
// };


/*Image Slider*/
  document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;

    function changeSlide(n) {
      const slides = document.querySelector(".slides");
      const totalSlides = document.querySelectorAll(".slide").length;

      currentSlide = (currentSlide + n + totalSlides) % totalSlides;
      slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    }

    // Adding event listeners separately after DOMContentLoaded
    document.querySelector(".prev").addEventListener("click", function () {
      changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
      changeSlide(1);
    });
  });
/*Big Image Slider*/
    const customSlider = document.querySelector(".custom-slider");
    const customSlides = document.querySelectorAll(".custom-slide");
    let customIndex = 0;

    document.querySelector(".custom-next").addEventListener("click", () => {
      customIndex = (customIndex + 1) % customSlides.length;
      updateCustomSlider();
    });

    document.querySelector(".custom-prev").addEventListener("click", () => {
      customIndex =
        (customIndex - 1 + customSlides.length) % customSlides.length;
      updateCustomSlider();
    });

    function updateCustomSlider() {
      customSlider.style.transform = `translateX(${-customIndex * 100}%)`;
    }

/*Changing page smoothly*/
function changePage1() {
  // Add a class for fade-out effect
  document.body.classList.add("fade-out");

  // Wait for the animation to complete before changing the page
  setTimeout(function () {
    window.location.href = "Taboutus.html";
  }, 500); // Adjust the duration (in milliseconds) based on your transition effect
}

// Add a listener for the animation end event
document.body.addEventListener("animationend", function () {
  // Remove the fade-out class and add the fade-in class
  document.body.classList.remove("fade-out");
  document.body.classList.add("fade-in");
});


/*Reaching Another Part*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});