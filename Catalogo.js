// Obtener elementos relevantes
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.getElementById('close');

// Función para abrir la ventana modal
function openModal(imageSrc, text) {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;
    document.getElementById('modal-text').textContent = text;
    modal.classList.add('show'); // Agregar la clase 'show' para mostrar la ventana modal
}

// Función para cerrar la ventana modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('show'); // Quitar la clase 'show' para ocultar la ventana modal
});

// Agregar eventos a los elementos de la galería para abrir la ventana modal
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        const text = item.querySelector('.image-name').textContent;
        openModal(imageSrc, text);
    });
});
// Función para cerrar la ventana modal
function closeModal() {
    modal.classList.remove('show'); // Quitar la clase 'show' para ocultar la ventana modal
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('close');

    // Función para abrir la ventana modal con la imagen y el texto correspondiente
    function openModal(imageSrc, textContent) {
        modalImage.src = imageSrc;
        modalText.textContent = textContent;
        modal.style.display = 'block';
    }

    // Función para cerrar la ventana modal
    function closeModal() {
        modal.style.display = 'none';
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
});
document.addEventListener("DOMContentLoaded", function () {
    const materialSelect = document.getElementById('material-select');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Función para mostrar u ocultar elementos según el material seleccionado
    function filterItems(selectedMaterial) {
        galleryItems.forEach(item => {
            const dataMaterial = item.getAttribute('data-material');
            if (selectedMaterial === 'todos' || dataMaterial === selectedMaterial) {
                item.style.display = 'block'; // Mostrar el elemento si es del material seleccionado o si se selecciona 'todos'
            } else {
                item.style.display = 'none'; // Ocultar el elemento si no es del material seleccionado
            }
        });
    }

    // Manejar el evento de cambio en el select de materiales
    materialSelect.addEventListener('change', function () {
        const selectedMaterial = materialSelect.value.toLowerCase();
        filterItems(selectedMaterial); // Filtrar los elementos según el material seleccionado
    });
});
