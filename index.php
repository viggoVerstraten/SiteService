<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    $phonenumber = $_POST['number'];

    $mailTo = "info@siteenservice.nl";
    $headers = "From: " . $mailFrom;
    $txt = "Je hebt een email ontvangen van " . $name . ".\n\n" . $message.'telefoonnummer = '.$phonenumber;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
};
