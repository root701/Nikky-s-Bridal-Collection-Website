document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const dress = document.getElementById('dress').value;
  const date = document.getElementById('date').value;

  if (!name || !email || !dress || !date) {
    alert('Please fill out all fields.');
    return;
  }

  const confirmationDiv = document.getElementById('confirmation');
  confirmationDiv.innerHTML = `
    Thank you, <strong>${name}</strong>!<br>
    Your booking for the <strong>${dress}</strong> dress on <strong>${date}</strong> has been received.<br>
    We will contact you shortly at <strong>${email}</strong>.
  `;

  // Optionally, reset the form
  document.getElementById('bookingForm').reset();
});