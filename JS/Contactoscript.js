document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        const requiredFields = form.querySelectorAll(':required');

        let isValid = true;

        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('invalid'); // Agrega una clase para estilos adicionales
            } else {
                field.classList.remove('invalid');
            }
        });

        if (!isValid) {
            event.preventDefault(); // Detiene el envío del formulario si no es válido
        }
    });
});
