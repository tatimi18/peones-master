<?php 

if (isset($_POST['name']) && isset($_POST['tel']) && isset($_POST['email'])) {
$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['message'];


$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();   // Set mailer to use SMTP
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                                   
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'tanya.silovii@gmail.com';                 // Наш логин
$mail->Password = 'iyzlxldwymusrqtf';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('tanya.silovii@gmail.com', 'Peones');   // От кого письмо 
$mail->addAddress('tanya16-99@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->setLanguage('ru');

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '<br> Сообщение:' . $message;

if(!$mail->send()) {
	echo 'fail';
	echo 'ошибка: ' . $mail->ErrorInfo;
    return false;
} else {
	echo 'done!';
    return true;
}

};




?>