@extends('layouts.template')
@section('title', 'Usuários')
@section('subtitle', 'Editar')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Dados Cadastrais</h3>
        </div>
        <form method="post" class="needs-validation" action="{{route('users.update',$users->first()->id)}}" novalidate>
            @method('put')
            @CSRF
            <div class="box-body">
                <div class="row col-md-12">
                    <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                        <label for="name">Nome</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Nome do Cliente" value="{{$users->first()->name}}" required>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-6 col-md-3 col-lg-2 form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" class="form-control" name="cpf" id="cpf" placeholder="CPF" value="{{$users->first()->cpf}}" data-mask="000.000.000-00" autocomplete="off" required>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-2 col-lg-2 form-group">
                        <label for="number">Telefone</label>
                        <input type="text" class="form-control" name="number" id="number" placeholder="(XX) XXXXX-XXXX" value="{{$users->first()->number}}" data-mask="(00) 00000-0000" autocomplete="off" required>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-12 col-md-5 col-lg-4 form-group">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="example@example.com" value="{{$users->first()->email}}" required>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="col-sm-6 col-md-3 col-lg-2 form-group">
                        <label for="profile">Perfil</label>
                        <select class="form-control custom-select" name="profile" id="profile" required>
                            <option value="">Nível de Permissão</option>
                            @foreach ($profiles as $var)
                                <option value="{{$var->id}}" <?php if($users->first()->tbl_profiles_id == $var->id) echo 'selected'; ?>>{{$var->name}}</option>
                            @endforeach
                        </select>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-2 col-lg-2 form-group">
                        <label for="status">Status</label>
                        <select class="form-control custom-select" name="status" id="status" required>
                            <option value="">Status do Usuário</option>
                            <option value="$2y$10rH@g" <?php if($users->first()->status == '$2y$10rH@g') echo 'selected'; ?>>Ativo</option>
                            <option value=".fZEW.57&!" <?php if($users->first()->status == '.fZEW.57&!') echo 'selected'; ?>>Inativo</option>
                        </select>
                        <div class="invalid-feedback">
                            Campo Obrigatório
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <a href="{{route('users.index')}}"><button type="button" class="btn btn-danger">Voltar</button></a>
                <button type="submit" class="btn btn-primary">Editar</button>
            </div>
        </form>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection