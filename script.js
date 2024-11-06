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



document.addEventListener("DOMContentLoaded", () => {
  const caseStudies = document.querySelectorAll(".case-study");

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  caseStudies.forEach(study => {
    observer.observe(study);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const blogCards = document.querySelectorAll(".blog-card");

  const revealOnScroll = () => {
    const scrollTop = window.scrollY;
    blogCards.forEach(card => {
      const offsetTop = card.offsetTop;
      if (scrollTop + window.innerHeight > offsetTop + 50) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We will get back to you soon.");
  document.getElementById("contact-form").reset();
});
