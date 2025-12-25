// ========== SCROLL POSITION MANAGEMENT ==========
// Prevent browser auto-restore of scroll position
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// Force scroll to top on page load
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;
window.scrollTo(0, 0);

// Also reset when page fully loads
window.addEventListener('load', function() {
  setTimeout(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 0);
});

// ========== THEME TOGGLE ==========
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.setAttribute(
      "data-theme",
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
  });
}

// ========== FORM HANDLING ==========
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
      console.log("Form submitted:", Object.fromEntries(formData));
      alert("Message sent successfully!");
      contactForm.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  });
}

// ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

