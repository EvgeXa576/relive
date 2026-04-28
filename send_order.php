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
    $name  = $_POST['name'] ?? 'Не указано';
    $phone = $_POST['tel'] ?? 'Не указано';
    $order = $_POST['order'] ?? 'Пустой заказ';
    $total = $_POST['total'] ?? '0';

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
    $mail->setFrom('Evgeniy17576@yandex.ru', 'Relive Shop');
    $mail->addAddress('Evgeniy17576@yandex.ru'); // Кому придет письмо

    // Контент
    $mail->isHTML(true);
    $mail->Subject = 'НОВЫЙ ЗАКАЗ - Relive Kombucha';
    $mail->Body    = "
        <h2>Новый заказ с сайта</h2>
        <p><b>Клиент:</b> $name</p>
        <p><b>Телефон:</b> $phone</p>
        <hr>
        <p><b>Состав заказа:</b><br>" . nl2br($order) . "</p>
        <p><b>Итого к оплате:</b> $total руб.</p>
    ";

    $mail->send();
    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
}
?>