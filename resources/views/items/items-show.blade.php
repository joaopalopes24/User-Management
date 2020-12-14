@extends('layouts.template')
@section('title', 'Item - '.$menu->first()->name)
@section('subtitle', 'Editar')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Dados do Item</h3>
        </div>
        <div class="box-body">
            <div class="row col-md-12">
                <div class="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label for="name">Nome</label>
                    <input class="form-control" value="{{$items->first()->name}}" disabled>
                </div>
                <div class="col-sm-6 col-md-3 form-group">
                    <label for="icon">Ícone</label>
                    <input class="form-control" value="{{$items->first()->icon}}" disabled>
                </div>
                <div class="col-sm-6 col-md-3 form-group">
                    <label for="icon">Status</label>
                    <input class="form-control" value="<?php if($items->first()->status == '$2y$10rH@g'){echo 'Ativo';}elseif($items->first()->status == '.fZEW.57&!'){echo 'Inativo';}else{echo 'Sem Status';}?>" disabled>
                </div>
            </div>
            <div class="row col-md-12">
                <div class="col-sm-6 col-lg-3 form-group">
                    <label for="icon">Menu</label>
                    <input class="form-control" value="{{$menu->first()->name}}" disabled>
                </div>
                <div class="col-sm-6 col-lg-3 form-group">
                    <label for="icon">Método</label>
                    <input class="form-control" value="{{$method->first()->route}}" disabled>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <a href="{{route('menus.items.index',$menu->first()->id)}}"><button type="button" class="btn btn-danger">Voltar</button></a>
        </div>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection
