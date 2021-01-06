# Sistema para Gerenciamento de Usuários

## Sobre este projeto

- Data Inicial: 30/11/2020
- Desenvolvedor: João Pedro Lopes
- Status: `Em Andamento`
- Data de Conclusão: 

### Requisitos
- PHP >= 7.3
- Laravel = 8
- Composer v1.10.3
- Mysql v7.4.11

### Como instalar
- Clone o projeto
    ```bash
        git clone https://gitlab.com/joaopalopes24/user_management.git
    ```
- Copie o arquivo .env.example
    - Se estiver utilizando linux: cp .env.example .env
    - Se estiver no windows abra o arquivo em um editor de código e o salve novamente como .env
-
- Crie uma nova chave para a aplicação
    ```bash
        php artisan key:generate
    ```
- Atualize as configuração do banco de dados
    - config > database.php 
    ```php
        'database' => env('DB_DATABASE', 'database'),
        'username' => env('DB_USERNAME', 'username'),
        'password' => env('DB_PASSWORD', 'senha'),
    ```            
- Rode as Migrations com os Seeder
    ```bash
        php artisan migrate --seed
    ```

## OBS
- Ao colocar em produção, retirar o readme.md e os arquivos de referencia para não subir para o sistema em produção

## Possíveis Issues

### 1. Erro ao recuperar a senha.

Este problema ocorre devido ao fato do google sempre desativar o acesso a apps inseguros. Para corrigir isso segue o passo a passo: 

- Entre no arquivo `config > mail.php`
- Pegue a senha e o e-mail nos indices `username` e `password`;
    ```php
        /*
        |--------------------------------------------------------------------------
        | SMTP Server Username
        |--------------------------------------------------------------------------
        |
        | If your SMTP server requires a username for authentication, you should
        | set it here. This will get used to authenticate with your server on
        | connection. You may also set the "password" value below this one.
        |
        */

        'username' => env('MAIL_USERNAME', 'email_aqui'),

        'password' => env('MAIL_PASSWORD', 'senha_aqui'),

    ```
- Faça login na conta do google do e-mail de redefinição de senha.
- Vá em **Gerenciar sua Conta do Google**
- Clique na aba **Segurança**
- Depois ative o **Acesso a app menos seguro**.

**Pronto, problema resolvido!**
    


