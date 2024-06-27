document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    document.querySelectorAll('.gallery-item img').forEach(item => {
      item.addEventListener('click', event => {
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        const modalImage = document.getElementById('modal-product-image');
        const zoomedImage = document.getElementById('zoomedImage');
        const modalProductName = document.getElementById('modal-product-name');
  
        modalImage.src = event.target.src;
        zoomedImage.src = event.target.src;
  
        // Obtener el nombre del producto desde el siguiente elemento p.image-name
        const productName = event.target.nextElementSibling.textContent.trim();
        modalProductName.textContent = productName; // Mostrar el nombre en la modal
  
        modal.show();
      });
    });
  
    document.getElementById('modal-product-image').addEventListener('click', () => {
      const zoomedImageContainer = document.getElementById('modal-zoomed-image-container');
      zoomedImageContainer.classList.add('active');
  
      // No se actualiza el nombre al hacer clic en la imagen principal del modal
    });
  
    document.getElementById('zoomedImage').addEventListener('click', () => {
      const zoomedImageContainer = document.getElementById('modal-zoomed-image-container');
      zoomedImageContainer.classList.remove('active');
    });
  
    // Filtrado por material
    const materialSelect = document.getElementById('material-select');
  
    materialSelect.addEventListener('change', function () {
      const selectedMaterial = this.value;
  
      galleryItems.forEach(item => {
        const material = item.dataset.material;
  
        if (selectedMaterial === 'todos' || material === selectedMaterial) {
          item.style.display = 'block'; // Mostrar el elemento si coincide con el material seleccionado
        } else {
          item.style.display = 'none'; // Ocultar el elemento si no coincide
        }
      });
  
      // Asegurar que la modal se centre correctamente después de filtrar
      const modalDialog = document.querySelector('.modal-dialog');
      modalDialog.classList.add('modal-dialog-centered');
    });
  });
  