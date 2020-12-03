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
            <li class="active">Status</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <!---------- Início Tabela ---------->
                <div class="box">
                    <div class="box-header">
                        <a href="{{route('users.create')}}"><button class="btn btn-primary pull-left">Novo Usuário</button></a>
                    </div>
                    <div class="box-body">
                    <div class="table-responsive">
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>CPF</th>
                                    <th>Perfil</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @for($i=1;$i<120;$i++) <tr>
                                    <td><?= $i ?></td>
                                    <td>João Pedro de Aguiar Lopes</td>
                                    <td>joaopalopes24@gmail.com</td>
                                    <td>072.778.466-80</td>
                                    <td>Administrador Master</td>
                                    <td>1</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="{{route('users.show',1)}}"><button class="btn btn-default"><i class="fa  fa-eye"></i></button></a>
                                            <a href="{{route('users.edit',1)}}"><button class="btn btn-info"><i class="fa fa-pencil"></i></button></a>
                                            <a href="{{route('users.destroy',1)}}"><button class="btn btn-danger"><i class="fa fa-trash"></i></button></a>
                                        </div>
                                    </td>
                                    </tr>
                                    @endfor
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