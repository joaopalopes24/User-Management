@extends('layouts.template')
@section('title', 'Usuários')
@section('subtitle', 'Status')
@section('conteudo')
<!-- Início Conteúdo -->
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
                                    <td>{{$var1->profile->name}}</td>
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
<!-- Fim Conteúdo -->
@endsection
