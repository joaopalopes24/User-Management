<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Heimar Representações</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('dist/css/AdminLTE.min.css')}}">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>

<body class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <a href="{{route('/')}}">
        <p class="text-center"><img src="{{asset('images/logo-heimar1.png')}}" width="360"></p>
      </a>
    </div>

    @if($errors->has('failed'))
        <div class="alert alert-danger alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
          <strong>{{ $errors->first('failed') }}</strong>
        </div>
    @endif

    @if($errors->has('alert'))
        <div class="alert alert-warning alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
          <strong>{{ $errors->first('alert') }}</strong>
        </div>
    @endif

    @yield('conteudo')
    
  </div>

  <!-- jQuery 3 -->
  <script src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
  <!-- Bootstrap 3.3.7 -->
  <script src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>

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

</body>

</html>