@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Adicionar Usuário
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{route('home.index')}}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Usuários</li>
            <li class="active">Cadastro</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Dados Cadastrais</h3>
                    </div>
                    <form method="post" class="needs-validation" action="{{route('users.store')}}" novalidate>
                        @CSRF
                        <div class="box-body">
                            <div class="row col-md-12">
                                <div class="col-sm-12 col-md-5 col-lg-5 form-group">
                                    <label for="name">Nome</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Nome do Cliente" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 form-group">
                                    <label for="cpf">CPF</label>
                                    <input type="text" class="form-control" name="cpf" id="cpf" placeholder="CPF" value="" data-mask="000.000.000-00" maxlenght="11" autocomplete="off" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-3 form-group">
                                    <label for="number">Telefone</label>
                                    <input type="text" class="form-control" name="number" id="number" placeholder="(XX) XXXXX-XXXX" value="" data-mask="(00) 00000-0000" maxlenght="11" autocomplete="off" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                            </div>
                            <div class="row col-md-12">
                                <div class="col-md-4 form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="example@example.com" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-md-2 form-group">
                                    <label for="password">Senha</label>
                                    <input type="password" class="form-control" name="password" id="password" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-md-3 form-group">
                                    <label for="profile">Perfil</label>
                                    <select class="form-control custom-select" name="profile" id="profile" required>
                                        <option value="">Nível de Permissão</option>
                                        @foreach ($profiles as $var)
                                            <option value="{{$var->id}}">{{$var->name}}</option>
                                        @endforeach
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-md-3 form-group">
                                    <label for="status">Status</label>
                                    <select class="form-control custom-select" name="status" id="status" required>
                                        <option value="">Status do Usuário</option>
                                        <option value="1">Ativo</option>
                                        <option value="0">Inativo</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <a href="{{route('users.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
                            <button type="submit" class="btn btn-success">Concluir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- Fim Conteúdo -->
@endsection