<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "johnpiolopascual0224@gmail.com"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\n\n$message";

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message! We will get back to you shortly.";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>