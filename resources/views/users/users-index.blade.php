@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Usuários
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{route('home.index')}}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Usuários</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                @if($errors->has('success'))
                    <div class="alert alert-success alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
                        <strong>{{ $errors->first('success') }}</strong>
                    </div>
                @endif
                @if($errors->has('failed'))
                    <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
                        <strong>{{ $errors->first('failed') }}</strong>
                    </div>
                @endif
            </div>
            <div class="col-md-12">
                <!---------- Início Tabela ---------->
                <div class="box box-primary">
                    <div class="box-header">
                        <a href="{{route('users.create')}}"><button class="btn btn-primary pull-left">Novo Usuário</button></a>
                    </div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome do Usuário</th>
                                        <th>E-mail</th>
                                        <th>CPF</th>
                                        <th>Perfil</th>
                                        <th>Status</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($users as $var1)
                                    <tr>
                                        <td>{{$var1->id}}</td>
                                        <td>{{$var1->name}}</td>
                                        <td>{{$var1->email}}</td>
                                        <td>{{$var1->cpf}}</td>
                                        @if($var1->tbl_profiles_id != NULL)
                                            @foreach($profiles as $var2)
                                                @if($var2->id == $var1->tbl_profiles_id)
                                                    <td>{{$var2->name}}</td>
                                                @endif
                                            @endforeach
                                        @else
                                            <td>Sem Perfil</td>
                                        @endif
                                        @if($var1->status == '$2y$10rH@g')
                                            <td>Ativo</td>
                                        @elseif($var1->status == '.fZEW.57&!')
                                            <td>Inativo</td>
                                        @else
                                            <td>Sem Status</td>
                                        @endif
                                        <td>
                                            <div class="btn-group">
                                                <a href="{{route('users.show',$var1->id)}}"><button type="button" class="btn btn-default"><i class="fa  fa-eye"></i></button></a>
                                                <a href="{{route('users.edit',$var1->id)}}"><button type="button" class="btn btn-info"><i class="fa fa-pencil"></i></button></a>
                                                <a><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-default{{$var1->id}}">
                                                    <i class="fa fa-trash"></i>
                                                </button></a>                                               
                                            </div>
                                            <div class="modal fade" id="modal-default{{$var1->id}}" style="display: none;">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span></button>
                                                            <h4 class="modal-title">Excluir Usuário</h4>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p>Caso prossiga com a exclusão do item, o mesmo não poderá ser mais recuperado. Deseja realmente excluir?</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <form method="post" action="{{route('users.destroy',$var1->id)}}" novalidate>
                                                                @method('delete')
                                                                @CSRF
                                                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Fechar</button>
                                                                <button type="submit" class="btn btn-danger">Confirmar Exclusão</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!---------- Fim Tabela ---------->
            </div>
        </div>
    </section>
</div>
<!-- Fim Conteúdo -->
@endsection
