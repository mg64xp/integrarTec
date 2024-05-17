
// Función para manejar el almacenamiento en LocalStorage
function manejarFechaTurno() {
    const fechaInput = document.getElementById('fecha');
    const fechaGuardada = localStorage.getItem('fechaTurno');

    if (fechaGuardada) {
        mostrarMensajeFecha(fechaGuardada);
        ocultarFormulario();
    } else {
        
        fechaInput.addEventListener('change', function() {
            localStorage.setItem('fechaTurno', fechaInput.value);
        });
    }
}

function mostrarMensajeFecha(fecha) {
    const mensajeContainer = document.getElementById('mensaje-turno-container');
    const mensaje = document.getElementById('mensaje-turno');
    if (mensaje && mensajeContainer) {
        mensaje.textContent = `Ya tienes un turno guardado para el dia ${fecha}`;
        mensajeContainer.style.display = 'block';
    }
}

function ocultarFormulario() {
    const formulario = document.getElementById('turno-form');
    if (formulario) {
        formulario.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    manejarFechaTurno();
});

document.getElementById('turno-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fechaInput = document.getElementById('fecha').value;
    if (!fechaInput) {
        alert('Por favor selecciona una fecha para agendar tu turno.');
    } else {
        localStorage.setItem('fechaTurno', fechaInput);
        mostrarMensajeFecha(fechaInput);
        ocultarFormulario();
    }
});
