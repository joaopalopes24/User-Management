@extends('layouts.template')
@section('title', 'Usuários')
@section('subtitle', 'Visualizar')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Dados Cadastrais</h3>
        </div>
            <div class="box-body">
                <div class="row col-md-12">
                    <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                        <label>Nome</label>
                    <input class="form-control" value="{{$users->first()->name}}" disabled>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                        <label>CPF</label>
                    <input class="form-control" value="{{$users->first()->cpf}}" disabled>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-6 col-md-3 col-lg-2 form-group">
                        <label>Data de Nascimento</label>
                        <input class="form-control" value="{{$users->first()->birth}}" disabled>
                    </div>
                    <div class="col-sm-6 col-md-2 col-lg-2 form-group">
                        <label>Telefone</label>
                        <input class="form-control" value="{{$users->first()->number}}" disabled>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                        <label>E-mail</label>
                        <input class="form-control" value="{{$users->first()->email}}" disabled>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-6 col-md-3 col-lg-2 form-group">
                        <label>Perfil</label>
                        <input class="form-control" value="{{$users->first()->profile->name}}" disabled>
                    </div>
                    <div class="col-sm-6 col-md-2 col-lg-2 form-group">
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
<!-- Fim Conteúdo -->
@endsection