# Sistema Ouvidoria Unimontes

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
        git clone https://gitlab.com/dti-desenvolvimento/sistema-ouvidoria.git
    ```
- Instale as dependências
    ```bash
        composer install --no-scripts
    ```
- Copie o arquivo .env.example
    - Se estiver utilizando linux: cp .env.example .env
    - Se estiver no windows abra o arquivo em um editor de código e o salve novamente como .env
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
- (Opcional) Faça upload do diretório para o servidor de desenvolvimento através do WinSCP.
    - Configure a extensão SFTP do seu VSCode.
        - Se não tiver a extensão instale no seu vscode.
        - Pressione F1 no projeto aberto no vscode e selecione SFTP: Config.
        - Preencha o arquivo sftp.json com os seguintes dados:
        ```json
        {
            "name": "Sistema Ouvidoria Unimontes",
            "host": "10.0.70.142",
            "protocol": "ftp",
            "port": 21,
            "username": "seu_usuário_do_winSCP",
            "remotePath": "/php5.6/dev/seu_diretorio/sistema-ouvidoria",
            "password": "sua_senha",
            "uploadOnSave": true
        }
        ``` 

## Pacotes e Bibliotecas Utilizadas

- [laravelcollective html v5.4](https://laravelcollective.com/docs/5.4/html)
- [LaravelLegends/pt-br-validator](https://github.com/LaravelLegends/pt-br-validator)
- [maatwebsite/excel](https://www.webslesson.info/2018/05/how-to-export-mysql-data-to-excel-file-in-laravel.html)
- [barryvdh/laravel-dompdf](https://github.com/barryvdh/laravel-dompdf)
- [Kit UI Argon Design System](https://www.creative-tim.com/product/argon-design-system)
- [Argon Dashboard](https://demos.creative-tim.com/argon-dashboard/index.html)
- [Jquery Validate](http://jqueryvalidation.org/)
- [Bootstrap wizard](https://www.creative-tim.com/product/bootstrap-wizard)
- [Bootstrap v4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [font-awesome v4.7](https://fontawesome.com/v4.7.0/icons/)
- [Headroom js](https://wicky.nillia.ms/headroom.js/)
- [Chart js](https://www.chartjs.org/)
- [Jquery filer v1.3.0](https://gerardbalaoro.github.io/jQuery.filer/)
- [Moment Js](https://github.com/moment/moment)
- [Tempus Dominus](https://tempusdominus.github.io/bootstrap-4/)
- [reCAPTCHA Validator for Laravel 5](https://blog.especializati.com.br/google-recaptcha-no-laravel/)

## Referências
- Arquivos: pasta raiz > storage 
    1. Modelo relacional
    2. Processo do SEI
    3. Documentação Técnica

- Dados do Wizard: pasta config > wizard_form
    1. Unidades
    2. Estados

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
- Vá em **Gerenciar sua conta do google**
- Clique na aba **Segurança**
- Depois ative o **Acesso a app menos seguro**.

**Pronto, problema resolvido!**
    


