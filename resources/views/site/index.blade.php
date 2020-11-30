@extends('layouts.site')
@section('conteudo')
<!-- Início Conteúdo -->
<!-- Inicio do Carousel -->
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img class="first-slide" src="{{asset('images/actvitta.jpg')}}" alt="First slide">
            <!-- Ocultar Texto Carousel
            <div class="container">
                <div class="carousel-caption">
                    <h1 class="cyan-letter">Qualidade</h1>
                    <p>O conforto em calçados de qualidade está diretamente associado a uma boa forma. Um molde bem construído e que se encaixa perfeitamente no pé são garantia de conforto.</p>
                </div>
            </div>
            -->
        </div>
        <div class="item">
            <img class="second-slide" src="{{asset('images/actvitta.jpg')}}" alt="Second slide">
            <!-- Ocultar Texto Carousel
            <div class="container">
                <div class="carousel-caption">
                    <h1 class="cyan-letter">Comforto</h1>
                    <p>O conforto em calçados de qualidade está diretamente associado a uma boa forma. Um molde bem construído e que se encaixa perfeitamente no pé são garantia de conforto.</p>
                </div>
            </div>
            -->
        </div>
        <div class="item">
            <img class="third-slide" src="{{asset('images/actvitta.jpg')}}" alt="Third slide">
            <!-- Ocultar Texto Carousel
            <div class="container">
                <div class="carousel-caption">
                    <h1 class="cyan-letter">Durabilidade</h1>
                    <p>O conforto em calçados de qualidade está diretamente associado a uma boa forma. Um molde bem construído e que se encaixa perfeitamente no pé são garantia de conforto.</p>
                </div>
            </div>
            -->
        </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
    </a>
</div>
<!-- Fim do Carousel -->

<!-- Inicio das Mensagens Circulares -->
<section class="content-branco">
    <div class="container marketing">
        <div class="row">
            <div class="col-md-4">
                <img class="img-circle" src="{{asset('images/imagem03.png')}}" alt="Generic placeholder image" width="140" height="140">
                <h2 class="cyan-letter">Qualidade</h2>
                <p class="blue-letter">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <!-- <p><a class="btn btn-primary" href="#" role="button">Ver detalhes &raquo;</a></p> -->
            </div>
            <div class="col-md-4">
                <img class="img-circle" src="{{asset('images/imagem01.png')}}" alt="Generic placeholder image" width="140" height="140">
                <h2 class="cyan-letter">Durabilidade</h2>
                <p class="blue-letter">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <!-- <p><a class="btn btn-primary" href="#" role="button">Ver detalhes &raquo;</a></p> -->
            </div>
            <div class="col-md-4">
                <img class="img-circle" src="{{asset('images/imagem02.png')}}" alt="Generic placeholder image" width="140" height="140">
                <h2 class="cyan-letter">Comforto</h2>
                <p class="blue-letter">O conforto em calçados de qualidade está diretamente associado a uma boa forma. Um molde bem construído e que se encaixa perfeitamente no pé são garantia de conforto.</p>
                <!-- <p><a class="btn btn-primary" href="#" role="button">Ver detalhes &raquo;</a></p> -->
            </div>
        </div>
    </div>
</section>
<!-- Inicio das Mensagens Circulares -->

<!-- Inicio das Featurettes -->
<section class="content-azul">
    <div class="container marketing">
        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading cyan-letter">First featurette heading.</h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
                <img class="featurette-image img-responsive center-block" src="{{asset('images/imagem04.png')}}" alt="Generic placeholder image">
            </div>
        </div>
    </div>
</section>
<section class="content-branco">
    <div class="container marketing">
        <div class="row featurette">
            <div class="col-md-7 col-md-push-5">
                <h2 class="featurette-heading blue-letter">Oh yeah, it's that good.</h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5 col-md-pull-7">
                <img class="featurette-image img-responsive center-block" src="{{asset('images/imagem05.png')}}" alt="Generic placeholder image">
            </div>
        </div>
    </div>
</section>
<section class="content-azul">
    <div class="container marketing">
        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading cyan-letter">And lastly, this one.</h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
                <img class="featurette-image img-responsive center-block" src="{{asset('images/imagem06.png')}}" alt="Generic placeholder image">
            </div>
        </div>
    </div>
</section>
<!-- Fim das Featurettes -->
<!-- Fim Conteúdo -->
@endsection