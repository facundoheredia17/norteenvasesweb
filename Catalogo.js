document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('close');

    // Función para abrir la ventana modal con la imagen y el texto correspondiente
    function openModal(imageSrc, textContent) {
        modalImage.src = imageSrc;
        modalText.textContent = textContent;
        modal.classList.add('show'); // Mostrar la ventana modal
    }

    // Función para cerrar la ventana modal
    function closeModal() {
        modal.classList.remove('show'); // Ocultar la ventana modal
    }

    // Abrir la ventana modal al hacer clic en una imagen de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const image = item.querySelector('img');
        const text = item.querySelector('.image-name');

        image.addEventListener('click', function() {
            openModal(image.src, text.textContent);
        });
    });

    // Cerrar la ventana modal al hacer clic en el botón de cierre (×)
    closeBtn.addEventListener('click', closeModal);

    // Cerrar la ventana modal al presionar la tecla Escape (Esc)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Cerrar la ventana modal al hacer clic fuera de ella
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Filtrar elementos de la galería según el material seleccionado
    const materialSelect = document.getElementById('material-select');
    materialSelect.addEventListener('change', function() {
        const selectedMaterial = this.value.toLowerCase();
        galleryItems.forEach(item => {
            const itemMaterials = item.getAttribute('data-material');

            if (itemMaterials && (selectedMaterial === 'todos' || itemMaterials.split(' ').includes(selectedMaterial))) {
                item.style.display = 'block'; // Mostrar el elemento si es del material seleccionado o si se selecciona 'todos'
            } else {
                item.style.display = 'none'; // Ocultar el elemento si no es del material seleccionado
            }
        });
    });
});
