document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Perform form validation
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }

    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return;
    }

    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      messageInput.focus();
      return;
    }

    // Prepare the form data to send
    const formData = new FormData();
    formData.append('name', nameInput.value.trim());
    formData.append('email', emailInput.value.trim());
    formData.append('message', messageInput.value.trim());

    // Send the form data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit_message.php'); // Replace with the path to your PHP script
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('An error occurred while sending the message. Please try again.');
      }
    };
    xhr.send(formData);
  });
});