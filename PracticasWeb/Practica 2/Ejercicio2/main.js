$(document).ready(function() {
    $('.dropdown-item').click(function() {
        alert('Has seleccionado la opción ' + $(this).text());
    });
});