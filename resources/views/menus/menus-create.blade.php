@extends('layouts.template')
@section('title', 'Menus')
@section('subtitle', 'Cadastrar')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Dados do Menu</h3>
        </div>
        <form method="post" class="needs-validation" action="{{route('menus.store')}}" novalidate>
            @CSRF
            <div class="box-body">
                <div class="row col-md-12">
                    <div class="col-sm-12 col-md-5 form-group">
                        <label for="name">Nome</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Nome do Menu" value="" required>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 form-group">
                        <label for="icon">Ícone</label>
                        <input type="text" class="form-control" name="icon" id="icon" placeholder="Ícone de Representação" value="" required>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 form-group">
                        <label for="status">Status</label>
                        <select class="form-control custom-select" name="status" id="status" required>
                            <option value="">Status do Menu</option>
                            <option value="$2y$10rH@g">Ativo</option>
                            <option value=".fZEW.57&!">Inativo</option>
                        </select>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <a href="{{route('menus.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
                <button type="submit" class="btn btn-success">Concluir</button>
            </div>
        </form>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection