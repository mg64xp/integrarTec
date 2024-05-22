


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











