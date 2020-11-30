@extends('layouts.model')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="login-box-body">
    <p class="login-box-msg">Recuperação de Senha</p>
    <form class="needs-validation" action="#" novalidate>
        <div class="form-group has-feedback">
            <input type="email" name='email' class="form-control" placeholder="E-mail" required>
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
            <div class="invalid-feedback">
                Campo Obrigatório
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6"></div>
            <div class="col-xs-6">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Recuperar Senha</button>
            </div>
        </div>
    </form>
    <a href="{{route('login.index')}}">Tela Inicial</a><br>
</div>
<!-- Fim Conteúdo -->
@endsection