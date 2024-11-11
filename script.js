const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navLinks = document.querySelector(".nav-links");

// Toggle the menu open/close
menuIcon.addEventListener("click", () => {
  navLinks.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});

// Reset on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    // Reset to desktop view
    navLinks.classList.remove("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    // Reset to mobile view default state
    navLinks.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});



document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We will get back to you soon.");
  document.getElementById("contact-form").reset();
});
