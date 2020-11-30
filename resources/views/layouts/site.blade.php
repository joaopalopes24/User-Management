<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Heimar Representações</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="canonical" href="https://getbootstrap.com/docs/3.4/examples/carousel/">
    <title>Carousel Template for Bootstrap</title>
    <!-- Bootstrap 3.4.1  -->
    <link href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('bower_components/font-awesome/css/font-awesome.min.css')}}">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="{{asset('assets/css/ie10-viewport-bug-workaround.css')}}" rel="stylesheet">
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="{{asset('assets/js/ie-emulation-modes-warning.js')}}"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="{{asset('assets/css/carousel.css')}}" rel="stylesheet">
</head>

<!-- Inicio da Barra Superior -->

<body>
    <div class="navbar-wrapper">
        <div class="container">

            <nav class="navbar navbar-inverse navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="{{route('/')}}">Heimar Representações</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li <?php if ($valor == 1) {
                                    echo 'class="active"';
                                } ?>><a href="{{route('sobre')}}">Sobre</a></li>
                            <li <?php if ($valor == 2) {
                                    echo 'class="active"';
                                } ?>><a href="{{route('midia')}}">Mídia</a></li>
                            <li <?php if ($valor == 3) {
                                    echo 'class="active"';
                                } ?>><a href="{{route('fale_conosco')}}">Fale Conosco</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="{{route('login.index')}}">Entrar</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    </div>
    <!-- Fim da Barra Superior -->

    @yield('conteudo')

    <!-- Inicio do Footer -->
    <section class="content-branco">
        <div class="container marketing">
            <footer>
                <div class="row text-center">
                    <div class="col-sm-3">
                        <h5 class="text-uppercase">
                            <a href="{{route('/')}}" class="<?php if ($valor == 0) { echo 'focus'; } ?> blue-letter"><b>Início</b></a>
                        </h5>
                    </div>
                    <div class="col-sm-3">
                        <h5 class="text-uppercase">
                            <a href="{{route('sobre')}}" class="<?php if ($valor == 1) { echo 'focus'; } ?> blue-letter"><b>Sobre</b></a>
                        </h5>
                    </div>
                    <div class="col-sm-3">
                        <h5 class="text-uppercase">
                            <a href="{{route('midia')}}" class="<?php if ($valor == 2) { echo 'focus'; } ?> blue-letter"><b>Mídia</b></a>
                        </h5>
                    </div>
                    <div class="col-sm-3">
                        <h5 class="text-uppercase">
                            <a href="{{route('fale_conosco')}}" class="<?php if ($valor == 3) { echo 'focus'; } ?> blue-letter"><b>Fale Conosco</b></a>
                        </h5>
                    </div>
                </div>
                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <a href="https://pt-br.facebook.com" class="btn-floating btn-facebook mx-1 waves-effect waves-light">
                            <i class="fa fa-facebook"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com" class="btn-floating btn-instagram mx-1 waves-effect waves-light">
                            <i class="fa fa-instagram"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.google.com.br/maps/@-16.736412,-43.8633623,14.25z" class="btn-floating btn-google mx-1 waves-effect waves-light">
                            <i class="fa fa-google"> </i>
                        </a>
                    </li>
                </ul>
                <p class="pull-right"><a class="btn btn-primary" href="#" role="button">Início <i class="fa fa-arrow-up"></i></a></p>
                <p class="lead blue-letter" style="margin-left: 58px;">© Heimar Representações - 2020</p>
            </footer>
        </div>
    </section>
    <!-- Fim do Footer -->

    <!-- Bootstrap core JavaScript -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="{{asset('assets/jquery/jquery-1.12.4.min.js')}}" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="{{asset("assets/jquery/jquery-1.12.4.min.js")}}"><\/script>')
    </script>
    <script src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <script src="{{asset('assets/js/vendor/holder.min.js')}}"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="{{asset('assets/js/ie10-viewport-bug-workaround.js')}}"></script>
</body>

</html>