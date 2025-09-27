function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementsById("overlay").classList.toggle("active");
}
// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
    overlay.style.display = "none";
  } else {
    sidebar.style.left = "0px";
    overlay.style.display = "block";
  }
}

// Show items when they enter viewport
const items = document.querySelectorAll('.ad-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));

















 const scrollContainer = document.getElementById('scrollContainer');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');

    arrowRight.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    });

    arrowLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    });

    function toggleDetails(button) {
      const details = button.nextElementSibling;
      details.classList.toggle("active");
      button.textContent = details.classList.contains("active") ? "Hide Details" : "Show Details";
    }

    // Handle form submission with EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formMessage = document.getElementById("formMessage");

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      formMessage.style.color = "green";
      formMessage.textContent = "✅ Your message has been sent to Kenbon Computers!";
      document.getElementById("contactForm").reset();
    })
    .catch(() => {
      formMessage.style.color = "red";
      formMessage.textContent = "❌ Failed to send message. Please try again later.";
    });
});
