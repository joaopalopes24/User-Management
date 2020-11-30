@extends('layouts.site')
@section('conteudo')
<!-- Início Conteúdo -->
<!-- Inicio do Carousel -->
<div class="carousel slide" style="height: 300px; margin-bottom:60px;">
    <div class="carousel-inner" role="listbox">
        <div class="item active" style="height: 300px;">
            <img src="">
        </div>
    </div>
</div>
<!-- Fim do Carousel -->

<!-- Inicio das Mensagens Circulares -->
<section class="content-branco">
    <div class="container marketing">
        <div class="row">
            <div class="col-md-4">
                <img class="img-circle" src="{{asset('images/imagem03.png')}}" alt="Generic placeholder image" width="140" height="140">
                <h2 class="cyan-letter">Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div class="col-md-4">
                <img class="img-circle" src="{{asset('images/imagem01.png')}}" alt="Generic placeholder image" width="140" height="140">
                <h2 class="cyan-letter">Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div class="col-md-4">
                <img class="img-circle" src="{{asset('images/imagem02.png')}}" alt="Generic placeholder image" width="140" height="140">
                <h2 class="cyan-letter">Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
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