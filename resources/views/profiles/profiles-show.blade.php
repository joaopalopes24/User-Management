@extends('layouts.template')
@section('title', 'Perfis')
@section('subtitle', 'Visualizar')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Dados do Perfil</h3>
        </div>
            <div class="box-body">
                <div class="row col-md-12">
                    <div class="col-sm-6 form-group">
                        <label>Nome</label>
                    <input class="form-control" value="{{$profiles->first()->name}}" disabled>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Status</label>
                        <input class="form-control" value="<?php if($profiles->first()->status == '$2y$10rH@g'){echo 'Ativo';}elseif($profiles->first()->status == '.fZEW.57&!'){echo 'Inativo';}else{echo 'Sem Status';}?>" disabled>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <a href="{{route('profiles.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
            </div>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection