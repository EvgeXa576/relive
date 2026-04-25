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
    $name    = $_POST['name'] ?? 'Не указано';
    $phone   = $_POST['tel'] ?? 'Не указано';
    $email   = $_POST['email'] ?? 'Не указано';
    $company = $_POST['company'] ?? 'Не указано';

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
    $mail->Subject = 'Новая заявка: СТАТЬ ПАРТНЕРОМ';

    // Красивая верстка письма
    $mail->Body = "
        <h2 style='color: #2c3e50;'>Заявка на партнерство</h2>
        <table style='width: 100%; border-collapse: collapse;'>
            <tr>
                <td style='padding: 10px; border: 1px solid #eee;'><b>ФИО:</b></td>
                <td style='padding: 10px; border: 1px solid #eee;'>$name</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #eee;'><b>Телефон:</b></td>
                <td style='padding: 10px; border: 1px solid #eee;'>$phone</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #eee;'><b>Email:</b></td>
                <td style='padding: 10px; border: 1px solid #eee;'>$email</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #eee;'><b>Организация:</b></td>
                <td style='padding: 10px; border: 1px solid #eee;'>$company</td>
            </tr>
        </table>
        <p style='font-size: 12px; color: #7f8c8d; margin-top: 20px;'>Письмо отправлено автоматически с сайта Relive Kombucha</p>
    ";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Заявка принята"]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Ошибка: {$mail->ErrorInfo}"]);
}