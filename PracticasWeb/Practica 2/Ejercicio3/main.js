$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();
        if (nombre === '' || email === '' || mensaje === '') {
            $('#message').html('<div class="alert alert-danger">Por favor, complete todos los campos.</div>');
        } else {
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email)) {
                $('#message').html('<div class="alert alert-danger">Por favor, ingrese un correo electrónico válido.</div>');
            } else {
                $('#message').html('<div class="alert alert-success">¡Formulario enviado con éxito!</div>');
                $('#nombre').val('');
                $('#email').val('');
                $('#mensaje').val('');
            }
        }
    });
});