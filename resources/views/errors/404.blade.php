@extends('layouts.error')
@section('conteudo')
<!-- Início Conteúdo -->
<section class="content">
  <div class="error-page" style="margin-top: 200px;">
    <h2 class="headline text-yellow"> 404</h2>
    <div class="error-content">
      <h3><i class="fa fa-warning text-yellow"></i> Oops! Página não encontrada.</h3>
      <p>
        Não foi possível encontrar a página que você estava procurando.
        Enquanto isso, você pode retornar ao <a href="{{route('login.index')}}">painel inicial</a> ou para a <a href="javascript:history.go(-1)">página anterior</a>.
      </p>
    </div>
  </div>
</section>
<!-- Fim Conteúdo -->
@endsection