@extends('layouts.template')
@section('conteudo')
<!-- Início Conteúdo -->
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Adicionar Cliente
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
            <li class="active">Clientes</li>
            <li class="active">Cadastro</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <!-- left column -->
            <div class="col-md-12">
                <!-- general form elements -->
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Dados Cadastrais</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    <form class="needs-validation" novalidate>
                        <div class="box-body">
                            <div class="row col-md-12">
                                <div class="col-sm-12 col-md-5 col-lg-5 form-group">
                                    <label for="nome">Nome</label>
                                    <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome do Cliente" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 form-group">
                                    <label for="cpf/cnpj">CPF / CNPJ</label>
                                    <input type="text" class="form-control" name="cpf/cnpj" id="cpf/cnpj" placeholder="CPF / CNPJ" value="" data-mask="000.000.000-00" maxlenght="11" autocomplete="off" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-3 form-group">
                                    <label for="telefone">Telefone</label>
                                    <input type="text" class="form-control" name="telefone" id="telefone" placeholder="(XX) XXXXX-XXXX" value="" data-mask="(00) 00000-0000" maxlenght="11" autocomplete="off" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                            </div>
                            <div class="row col-md-12">
                                <div class="col-sm-12 col-md-6 col-lg-5 form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="example@example.com" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                            </div>
                            <h4>Endereço</h4>
                            <div class="row col-md-12">
                                <div class="col-md-4 form-group">
                                    <label for="rua">Rua</label>
                                    <input type="text" class="form-control" name="rua" id="rua" placeholder="Rua" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-2 form-group">
                                    <label for="numero">Número</label>
                                    <input type="number" class="form-control" name="numero" id="numero" placeholder="Número" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3 form-group">
                                    <label for="complemento">Complemento</label>
                                    <input type="text" class="form-control" name="complemento" id="complemento" placeholder="Complemento" value="">
                                </div>
                                <div class="col-md-3 form-group">
                                    <label for="bairro">Bairro</label>
                                    <input type="text" class="form-control" name="bairro" id="bairro" placeholder="Bairro" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                            </div>
                            <div class="row col-md-12">
                                <div class="col-md-4 form-group">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" class="form-control" name="cidade" id="cidade" placeholder="Cidade" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="uf">UF</label>
                                    <input type="text" class="form-control" name="uf" id="uf" placeholder="UF" value="" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="cep">CEP</label>
                                    <input type="text" class="form-control cep-mask" name="cep" id="cep" placeholder="XXXXX-XXX" value="" data-mask="00000-000" maxlenght="8" autocomplete="off" required>
                                    <div class="invalid-feedback">
                                        Campo Obrigatório
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="box-footer">
                            <button type="submit" class="btn btn-primary">Concluir</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </section>
</div>
<!-- Fim Conteúdo -->
@endsection