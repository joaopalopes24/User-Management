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
                            <label for="password">Senha Atual</label>
                            <input type="password" class="form-control" name="password" id="password" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" placeholder="Senha Atual" required>
                            <div class="invalid-feedback">
                                Mínimo 8 Caracteres.<br>
                                Pelo menos 1 letra.<br>
                                Pelo menos 1 número.<br>
                                Pelo menos 1 caractere especial.
                            </div>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="new_password">Nova Senha</label>
                            <input type="password" class="form-control" name="new_password" id="new_password" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" placeholder="Nova Senha" required>
                            <div class="invalid-feedback">
                                Mínimo 8 Caracteres.<br>
                                Pelo menos 1 letra.<br>
                                Pelo menos 1 número.<br>
                                Pelo menos 1 caractere especial.
                            </div>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                            <label for="new_password_2">Confirmar Senha</label>
                            <input type="password" class="form-control" name="new_password_2" id="new_password_2" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" placeholder="Confirmar Senha" required>
                            <div class="invalid-feedback">
                                Mínimo 8 Caracteres.<br>
                                Pelo menos 1 letra.<br>
                                Pelo menos 1 número.<br>
                                Pelo menos 1 caractere especial.
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