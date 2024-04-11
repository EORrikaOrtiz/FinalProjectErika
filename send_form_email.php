<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];    
    $to = 'erika04p@hotmail.com;
    $subject = 'New message from contact form';
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    if (mail($to, $subject, $body, $headers)) {
        echo 'Form submitted successfully.';
    } else {
        echo 'There was an error sending the message.';
    }
}
?>