// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form submission handler (for demonstration)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});