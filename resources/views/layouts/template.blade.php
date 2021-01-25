<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>João Pedro Lopes</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('bower_components/font-awesome/css/font-awesome.min.css')}}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{asset('bower_components/Ionicons/css/ionicons.min.css')}}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('dist/css/AdminLTE.min.css')}}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{asset('dist/css/skins/_all-skins.min.css')}}">
    <!-- Stylesheets -->
    <!-- DataTables -->
    <link rel="stylesheet" href="{{asset('bower_components/datatables/css/dataTables.bootstrap.min.css')}}">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>

<?php use App\Models\Item; $items = Item::read(NULL,NULL,'$2y$10rH@g',NULL,NULL); ?>

<body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">
        <header class="main-header">
            <a href="{{route('home.index')}}" class="logo">
                <span class="logo-mini"><b>JP</b></span>
                <span class="logo-lg"><b>João Pedro Lopes</b></span>
            </a>
            <nav class="navbar navbar-static-top">
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Navegação</span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-user" style="font-size: 1.75rem;"></i>
                                <span class="hidden-xs">{{ Auth::user()->name }}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="user-header">
                                    <p>
                                        {{ Auth::user()->name }}
                                        <small>{{ Auth::user()->email }}</small>
                                        <br><br>
                                        <strong>{{ date('d/m/y') }}</strong>
                                    </p>
                                </li>
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="{{route('home.change_password')}}" class="btn btn-default btn-flat">Alterar Senha</a>
                                    </div>
                                    <div class="pull-right">
                                        <a href="{{route('login.logout')}}" class="btn btn-danger btn-flat">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- Fim Cabeçalho -->

        <!-- Início Menu -->
        <aside class="main-sidebar">
            <section class="sidebar">
                <ul class="sidebar-menu" data-widget="tree">
                    <?php $menu = 0 ?>
                    @foreach ($items as $var1)
                        @if($var1->method->permission->where('tbl_profiles_id',Auth::user()->tbl_profiles_id) != '[]' && $var1->menu->status == '$2y$10rH@g')
                            @if($menu == 0)
                                <li class="treeview">
                                    <a href="#">
                                        <i class="fa {{$var1->menu->icon}}"></i>
                                        <span> {{$var1->menu->name}}</span>
                                        <span class="pull-right-container">
                                            <i class="fa fa-angle-left pull-right"></i>
                                        </span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li><a href="{{route($var1->method->route)}}"><i class="fa {{$var1->icon}}"></i> {{$var1->name}}</a></li>
                                <?php $menu = $var1->tbl_menus_id ?>
                            @elseif($var1->tbl_menus_id != $menu)
                                    </ul>
                                </li>
                                <li class="treeview">
                                    <a href="#">
                                        <i class="fa {{$var1->menu->icon}}"></i>
                                        <span> {{$var1->menu->name}}</span>
                                        <span class="pull-right-container">
                                            <i class="fa fa-angle-left pull-right"></i>
                                        </span>
                                    </a>
                                    <ul class="treeview-menu">
                                        <li><a href="{{route($var1->method->route)}}"><i class="fa {{$var1->icon}}"></i> {{$var1->name}}</a></li>
                                <?php $menu = $var1->tbl_menus_id ?>
                            @else
                                <li><a href="{{route($var1->method->route)}}"><i class="fa {{$var1->icon}}"></i> {{$var1->name}}</a></li>
                            @endif
                        @endif
                    @endforeach
                </ul>
            </section>
        </aside>
        <!-- Fim Menu -->

        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    @yield('title')
                </h1>
                <ol class="breadcrumb">
                    <li><a href="{{route('home.index')}}"><i class="fa fa-dashboard"></i> Página Inicial</a></li>
                    <li class="active">@yield('title')</li>
                    <li class="active">@yield('subtitle')</li>
                </ol>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-md-12">

                        <!-- Inclusão das Caixas de Erro -->
                        @include('layouts.alerts')

                    </div>
                    
                    @yield('conteudo')

                </div>
            </section>
        </div>

        <!-- Início Rodapé -->
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0.0
            </div>
            <strong>Heimar Representações - {{ date('Y') }}</strong>
        </footer>
        <div class="control-sidebar-bg"></div>
    </div>

    <!-- jQuery 3 -->
    <script src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
    <!-- Bootstrap 3.3.7 -->
    <script src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <!-- FastClick -->
    <script src="{{asset('bower_components/fastclick/lib/fastclick.js')}}"></script>
    <!-- AdminLTE App -->
    <script src="{{asset('dist/js/adminlte.min.js')}}"></script>
    <!-- DataTables -->
    <script src="{{asset('bower_components/datatables/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('bower_components/datatables/js/dataTables.bootstrap.min.js')}}"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="{{asset('dist/js/demo.js')}}"></script>
    <!-- Stylesheets -->
    <script src="{{asset('stylesheets/js/locastyle.js')}}"></script>

    <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
            'use strict';
            window.addEventListener('load', function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();

    </script>
    <script>
        $(function() {
            $('#example1').DataTable()
            $('#example2').DataTable({
                'paging': true
                , 'lengthChange': false
                , 'searching': false
                , 'ordering': true
                , 'info': true
                , 'autoWidth': false
            })
        })

    </script>
</body>
</html>
