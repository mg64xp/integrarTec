alert{'Servicios'

}
document.addEventListener('DOMContentLoaded', function() {
    const odontopediatria = document.getElementById('odontopediatria');

    odontopediatria.addEventListener('click', function() {
        window.location.href = 'odontopediatria.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const masInfoLink = document.querySelector('.mas-info-link');

    masInfoLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.open('odontopediatria.html', '_blank');// Evita que se abra la página directamente
        

    });
});

;













document.addEventListener('DOMContentLoaded', function() {
    // Manejador de eventos para el formulario de consultas
    const consultaForm = document.getElementById('consulta-form');
    consultaForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Mostrar mensaje de confirmación
        const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
        mensajeConfirmacion.style.display = 'block';

        // Ocultar mensaje después de unos segundos
        setTimeout(function() {
            mensajeConfirmacion.style.display = 'none';
        }, 5000);

        // Limpiar el formulario
        consultaForm.reset();
    });
});











