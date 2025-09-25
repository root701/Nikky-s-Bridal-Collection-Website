// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const messageDiv = document.getElementById('form-message');
  messageDiv.textContent = 'Thank you for reaching out! I will get back to you soon.';
  
  // Optionally, reset the form
  this.reset();

  // Remove message after 3 seconds
  setTimeout(() => {
    messageDiv.textContent = '';
  }, 3000);
});