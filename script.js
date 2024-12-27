// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.setAttribute(
    "data-theme",
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
});

// Scroll Reveal
ScrollReveal().reveal(".reveal", {
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Initialize sections with reveal class
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("reveal");
});

// Form handling
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);

  try {
    // Add your form submission logic here
    console.log("Form submitted:", Object.fromEntries(formData));
    // Show success message
    alert("Message sent successfully!");
    contactForm.reset();
  } catch (error) {
    console.error("Error:", error);
    alert("There was an error sending your message. Please try again.");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
