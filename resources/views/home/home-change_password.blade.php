@extends('layouts.template')
@section('title', 'Dados Pessoais')
@section('subtitle', Auth::user()->name)
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-body">
            <div class="box-header with-border">
                <h3 class="box-title">Dados Cadastrais</h3>
            </div>
            <form method="post" class="needs-validation" action="{{route('home.change_password_do')}}" novalidate>
                @CSRF
                <div class="box-body">
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="name">Nome</label>
                            <input class="form-control" value="{{Auth::user()->name}}" disabled>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-6 col-md-3 col-lg-2 form-group">
                            <label for="cpf">CPF</label>
                            <input class="form-control" value="{{Auth::user()->cpf}}" disabled>
                        </div>
                        <div class="col-sm-6 col-md-2 col-lg-2 form-group">
                            <label for="number">Telefone</label>
                            <input class="form-control" value="{{Auth::user()->number}}" disabled>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="email">E-mail</label>
                            <input class="form-control" value="{{Auth::user()->email}}" disabled>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="password_old">Senha Atual</label>
                            <input type="password" class="form-control" name="password_old" id="password_old" placeholder="Senha Atual" minlength="8" required>
                            <div class="invalid-feedback">
                                Campo Obrigatório
                            </div>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="password">Nova Senha</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Nova Senha" minlength="8" required>
                            <div class="invalid-feedback">
                                Campo Obrigatório
                            </div>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="password_confirmation">Confirmar Senha</label>
                            <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Confirmar Senha" minlength="8" required>
                            <div class="invalid-feedback">
                                Campo Obrigatório
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <a href="{{route('home.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
                    <button type="submit" class="btn btn-success">Alterar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection