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

// Cerrar la ventana modal al hacer clic en la cruz
modalClose.addEventListener('click', closeModal);

// Cerrar la ventana modal al presionar la tecla Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
