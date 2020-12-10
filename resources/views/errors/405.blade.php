@extends('layouts.error')
@section('title','Error 405')
@section('conteudo')
<!-- Início Conteúdo -->
<section class="content">
  <div class="error-page" style="margin-top: 200px;">
    <h2 class="headline text-yellow"> 405</h2>
    <div class="error-content">
      <h3><i class="fa fa-warning text-yellow"></i> Oops! Algo deu errado.</h3>
      <p>
        Vamos trabalhar para consertar isso imediatamente. 
        Enquanto isso, você pode retornar ao <a href="{{route('login.index')}}">painel inicial</a> ou para a <a href="javascript:history.go(-1)">página anterior</a>.
      </p>
    </div>
  </div>
</section>
<!-- Fim Conteúdo -->
@endsection