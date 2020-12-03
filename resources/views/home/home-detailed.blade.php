@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Página Inicial
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{route('home.index')}}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Detalhado</li>
        </ol>
    </section>
    <section class="content">
        Teste
    </section>
</div>
<!-- Fim Conteúdo -->
@endsection