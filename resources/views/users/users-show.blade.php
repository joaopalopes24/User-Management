@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Dados do Usuário
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{route('home.index')}}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Usuários</li>
            <li class="active">Dados Pessoais</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Dados Cadastrais</h3>
                    </div>
                        <div class="box-body">
                            <div class="row col-md-12">
                                <div class="col-sm-12 col-md-5 col-lg-5 form-group">
                                    <label>Nome</label>
                                <input class="form-control" value="{{$users->first()->name}}" disabled>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 form-group">
                                    <label>CPF</label>
                                    <input class="form-control" value="{{$users->first()->cpf}}" disabled>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-3 form-group">
                                    <label>Telefone</label>
                                    <input class="form-control" value="{{$users->first()->number}}" disabled>
                                </div>
                            </div>
                            <div class="row col-md-12">
                                <div class="col-sm-12 col-md-5 col-lg-5 form-group">
                                    <label>E-mail</label>
                                    <input class="form-control" value="{{$users->first()->email}}" disabled>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 form-group">
                                    <label>Perfil</label>
                                    <input class="form-control" value="{{$profiles->first()->name}}" disabled>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-3 form-group">
                                    <label>Status</label>
                                    <input class="form-control" value="<?php if($users->first()->status == '$2y$10rH@g'){echo 'Ativo';}elseif($users->first()->status == '.fZEW.57&!'){echo 'Inativo';}else{echo 'Sem Status';}?>" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <a href="{{route('users.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
                        </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- Fim Conteúdo -->
@endsection