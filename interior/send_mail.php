<?php
$to = "enquiry@inifdgandhinagar.com";
$subject = "Interior Design Enquiry";
$txt = "Name : ".$_POST['Name']."\n\n"."Email : ".$_POST['Email']."\n\n".
"City : ".$_POST['City']."\n\n"."Phone Number : ".$_POST['Phone_Number']."\n\n".
"College/School : ".$_POST['College_School'];

$header = "From: enquiry@inifdgandhinagar.com \r\n";
$header .= "Content-type: text/plain";

$status = mail($to,$subject,$txt,$header);
if($status == true){
  echo "Success";
}
else if($status == false){
  echo "fail";
}
else{
  echo "null";
}
// return $status;

?>
