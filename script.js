
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitReview");
  const productNameInput = document.getElementById("productName");
  const reviewInput = document.getElementById("review");
  const stars = document.querySelectorAll(".star");
  const reviewsList = document.getElementById("reviewsList");
  let selectedRating = 0;

  // Load reviews from localStorage on page load
  loadReviews();

  // Handle star click
  stars.forEach(star => {
    star.addEventListener("click", () => {
      console.log("click on star")
      selectedRating = parseInt(star.getAttribute("data-value"));
      updateStarSelection();
    });
  });

  // Update star selection visually
  function updateStarSelection() {
    stars.forEach(star => {
      star.classList.remove("selected");
      if (parseInt(star.getAttribute("data-value")) <= selectedRating) {
        star.classList.add("selected");
      }
    });
  }

  // Handle submit review
  submitButton.addEventListener("click", () => {
    const productName = productNameInput.value.trim();
    const reviewText = reviewInput.value.trim();

    if (!productName || !selectedRating || !reviewText) {
      alert("Please fill out all fields.");
      return;
    }

    const review = {
      productName,
      rating: selectedRating,
      reviewText,
    };

    // Save to localStorage
    saveReviewToLocalStorage(review);
    
    // Display the new review
    displayReview(review);
    
    // Clear input fields
    productNameInput.value = "";
    reviewInput.value = "";
    selectedRating = 0;
    updateStarSelection();
  });

  // Display review on the page
  function displayReview(review) {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
      <h4>${review.productName}</h4>
      <div class="rating">${"\u2605".repeat(review.rating)}</div>
      <p>${review.reviewText}</p>
    `;
    
    reviewsList.appendChild(reviewItem);
  }

  // Save review to localStorage
  function saveReviewToLocalStorage(review) {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }

  // Load reviews from localStorage and display them
  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(review => displayReview(review));
  }
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
// setTimeout(() => {
//     document.getElementById("hero").style.opacity = "1";
// }, 500);
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    // If the click is outside the dropdown button and the dropdown itself
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.closest(".dropdown")
    ) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }

    // If a link inside the dropdown is clicked, close the dropdown
    if (event.target.matches(".dropdown-content a")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.remove("show");
      }
    }
  };
  let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 500;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } 
  });
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "grey"; // Reset all dots
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style.backgroundColor = "black"; // Set the active dot to black
}



