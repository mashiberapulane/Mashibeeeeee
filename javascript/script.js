document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  // If all validations pass, send the form data
  const formData = new FormData(this);

  fetch("process_form.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert("Message sent successfully!");
  })
  .catch(error => {
    console.error('Error:', error);
    alert("There was an error sending the message.");
  });
});
