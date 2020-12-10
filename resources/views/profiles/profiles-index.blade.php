@extends('layouts.template')
@section('title', 'Perfis')
@section('subtitle', 'Status')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="col-md-12">
    <!---------- Início Tabela ---------->
    <div class="box box-primary">
        <div class="box-header">
            <button class="btn btn-primary pull-left">Novo Perfil</button>
        </div>
        <div class="box-body">
            <div class="table-responsive">
                <table id="example1" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome do Perfil</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($profiles as $var1)
                        <tr>
                            <td>{{$var1->id}}</td>
                            <td>{{$var1->name}}</td>
                            @if($var1->status == '$2y$10rH@g')
                            <td>Ativo</td>
                            @elseif($var1->status == '.fZEW.57&!')
                            <td>Inativo</td>
                            @else
                            <td>Sem Status</td>
                            @endif
                            <td>
                                <div class="btn-group">
                                    <a href="#"><button class="btn btn-warning"><i class="fa fa-align-justify"></i></button></a>
                                    <a href="{{route('profiles.show',$var1->id)}}"><button class="btn btn-default"><i class="fa  fa-eye"></i></button></a>
                                    <a href="{{route('profiles.edit',$var1->id)}}"><button class="btn btn-info"><i class="fa fa-pencil"></i></button></a>
                                    <a href="{{route('profiles.destroy',$var1->id)}}"><button class="btn btn-danger"><i class="fa fa-trash"></i></button></a>
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
