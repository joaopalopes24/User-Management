@if ($errors->has('success'))
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
        <strong>{{ $errors->first('success') }}</strong>
    </div>
@elseif($errors->has('alert'))
    <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
        <strong>{{ $errors->first('alert') }}</strong>
    </div>
@elseif($errors->any())
    <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">×</button>
        @foreach ($errors->all() as $error)
            <strong>{{ $error }}</strong><br>
        @endforeach
    </div>
@endif
