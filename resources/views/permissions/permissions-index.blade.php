@extends('layouts.template')
@section('title', 'Perfis')
@section('subtitle', 'Permissões')
@section('conteudo')
<?php use App\Models\Permission; ?>
<!-- Início Conteúdo -->
<div class="col-md-12">
    <div class="box box-primary">
        <form method="post" class="needs-validation" action="{{route('profiles.permissions.store',$profiles->first()->id)}}" novalidate>
            @CSRF
            <div class="box-header with-border">
                <h3 class="box-title">Permissões do {{ $profiles->first()->name }}</h3>
            </div>
            <div class="box-body">
                <div class="col-md-12">
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                            @foreach ($classes as $var1)
                                <li class="<?php if($var1->class == $var1->first()->class){echo 'active';}?>"><a href="#<?php echo $var1->class; ?>" data-toggle="tab" aria-expanded="true">{{ $var1->class }}</a></li>
                            @endforeach
                        </ul>
                        <div class="tab-content">
                            @foreach ($classes as $var1)
                                <div class="tab-pane <?php if($var1->class == $var1->first()->class){echo 'active';}?>" id="{{ $var1->class }}">
                                    @foreach ($methods as $var2)
                                        @if($var2->class == $var1->class)
                                            @if(Permission::permission_check($profiles->first()->id,$var2->route))
                                                <div class="checkbox">
                                                    <label><input type="checkbox" name="{{ $var2->id }}" checked> {{ $var2->method }} </label>
                                                </div>
                                            @else
                                                <div class="checkbox">
                                                    <label><input type="checkbox" name="{{ $var2->id }}"> {{ $var2->method }} </label>
                                                </div>
                                            @endif
                                        @endif
                                    @endforeach
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <a href="{{ route('profiles.index') }}"><button type="button" class="btn btn-danger">Voltar</button></a>
                <button type="submit" class="btn btn-success">Salvar</button>
            </div>
        </form>
    </div>
</div>
<!-- Fim Conteúdo -->
@endsection
