<?php
$to = "jay.gagnani94@gmail.com";
$subject = "Inquiry";
$txt = "Name : ".$_POST['Name']."\r\n"."Email : ".$_POST['Email']."\r\n".
"City : ".$_POST['City']."\r\n"."Phone Number : ".$_POST['Phone_Number']."\r\n".
"College/School : ".$_POST['College_School'];

$headers = "From: ".$_POST['Email'];
// . "\r\n" ."CC: somebodyelse@example.com";

echo mail($to,$subject,$txt,$headers);
?>
