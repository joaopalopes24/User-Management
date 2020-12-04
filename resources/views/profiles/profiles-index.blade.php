@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Perfis
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{ route('home.index') }}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Perfis</li>
            <li class="active">Status</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <!---------- Início Tabela ---------->
                <div class="box">
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
                                        @if($var1->status == 2)
                                            <td><?php echo 'Ativo';?></td>
                                        @elseif($var1->status == 1)
                                            <td><?php echo 'Inativo';?></td>
                                        @else
                                            <td><?php echo 'Sem Status';?></td>
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
        </div>
    </section>
</div>
<!-- Fim Conteúdo -->
@endsection
