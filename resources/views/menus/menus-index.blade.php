@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Menus
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{route('home.index')}}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Menus</li>
            <li class="active">Status</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <!---------- Início Tabela ---------->
                <div class="box">
                    <div class="box-header">
                        <button class="btn btn-primary pull-left">Novo Menu</button>
                    </div>
                    <div class="box-body">
                    <div class="table-responsive">
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome do Menus</th>
                                    <th>Ícone</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                @for($i=1;$i<120;$i++) <tr>
                                    <td><?= $i ?></td>
                                    <td>Administrador Master</td>
                                    <td>fa-dashboard</td>
                                    <td>1</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href=""><button class="btn btn-warning"><i class="fa fa-align-justify"></i></button></a>
                                            <a href=""><button class="btn btn-default"><i class="fa  fa-eye"></i></button></a>
                                            <a href=""><button class="btn btn-info"><i class="fa fa-pencil"></i></button></a>
                                            <a href=""><button class="btn btn-danger"><i class="fa fa-trash"></i></button></a>
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