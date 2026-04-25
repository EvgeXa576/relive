<?php
// Заголовки для работы с React (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

// Подключаем библиотеку (путь может отличаться)

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Учитывая твою структуру папок (PHPMailer-7.0.2 лежит в той же папке, что и send.php)
require 'src/PHPMailer-7.0.2/src/Exception.php';
require 'src/PHPMailer-7.0.2/src/PHPMailer.php';
require 'src/PHPMailer-7.0.2/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->SMTPDebug = 0;
try {
    // Получаем данные из React (если FormData)
    $name = $_POST['name'] ?? 'Не указано';
    $phone = $_POST['phone'] ?? 'Не указано';

    // Настройки сервера (пример для Yandex)
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'Evgeniy17576@yandex.ru';
    $mail->Password   = 'bxdbgxywnnhaqzbw'; // ТОТ САМЫЙ КОД ИЗ 16 БУКВ
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    // Получатель и отправитель
    $mail->setFrom('Evgeniy17576@yandex.ru', 'Заявка с сайта');
    $mail->addAddress('Evgeniy17576@yandex.ru'); // Кому придет письмо

    // Контент
    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка: ' . $name;
    $mail->Body    = "<b>Имя:</b> $name <br> <b>Телефон:</b> $phone";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Письмо отправлено!"]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Ошибка: {$mail->ErrorInfo}"]);
}