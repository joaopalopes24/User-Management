<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PasswordReset extends Notification
{
    use Queueable;

    public function __construct($url)
    {
        $this->url = $url;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Notificação de Redefinição de Senha')
                    ->success()
                    ->greeting("Olá $notifiable->name!")
                    ->line('Você está recebendo este e-mail porque recebemos uma solicitação de redefinição de senha de sua conta.')
                    ->action('REDEFINIR SENHA', $this->url)
                    ->line('Este link de redefinição de senha expirará em 60 minutos. Se você não solicitou uma redefinição de senha, nenhuma ação adicional será necessária.');
    }
}
