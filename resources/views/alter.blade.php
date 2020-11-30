@extends('layouts.model')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="login-box-body">
    <p class="login-box-msg">Entre com seu e-mail e senha</p>
    <form class="needs-validation" action="#" novalidate>
        <div class="form-group has-feedback">
            <input type="email" name='email' class="form-control" placeholder="E-mail" required>
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
            <div class="invalid-feedback">
                Campo Obrigatório
            </div>
        </div>
        <div class="form-group has-feedback">
            <input type="password" name='novasenha1' class="form-control" placeholder="Nova Senha" required>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <div class="invalid-feedback">
                Campo Obrigatório
            </div>
        </div>
        <div class="form-group has-feedback">
            <input type="password" name='novasenha2' class="form-control" placeholder="Confirmar Nova Senha" required>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <div class="invalid-feedback">
                Campo Obrigatório
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4"></div>
            <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Alterar</button>
            </div>
            <div class="col-xs-4"></div>
        </div>
    </form>
</div>
<!-- Fim Conteúdo -->
@endsection