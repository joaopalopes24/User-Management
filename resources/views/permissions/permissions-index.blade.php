@extends('layouts.template')
@section('title', 'Perfis')
@section('subtitle', 'Permissões')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Permissões do Perfil</h3>
        </div>
        <div class="box-body">
            <div class="row col-md-12">
                teste
            </div>
        </div>
        <div class="box-footer">
            <a href="{{route('profiles.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
            <button type="submit" class="btn btn-success">Salvar</button>
        </div>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection