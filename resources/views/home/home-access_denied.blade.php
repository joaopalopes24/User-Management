@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">

  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-danger">
          <div class="box-header">
            <i class="fa fa-hand-stop-o"></i>
            <h3 class="box-title">Acesso Negado</h3>
          </div>
          <div class="box-body">
            <h4>
              Seu usuário não tem permissão para acessar essa página. Qualquer dúvida favor entrar em contato com o Administrador da página.
            </h4>
          </div>
          <div class="box-body">
            <a href="javascript:history.go(-1)">
              <button type="button" class="btn btn-danger">Voltar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<!-- Fim Conteúdo -->
@endsection