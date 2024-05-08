// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los botones con la clase 'addToCart'
    const addToCartButtons = document.querySelectorAll(".addToCart");
  
    // Itera sobre cada botón
    addToCartButtons.forEach(button => {
      // Agrega un event listener para el evento 'click'
      button.addEventListener("click", function(event) {
        // Obtén el nombre y el precio del producto desde los atributos 'data-'
        const productName = button.getAttribute("data-product-name");
        const productPrice = button.getAttribute("data-product-price");
  
        // Crea un objeto con la información del producto
        const productInfo = {
          name: productName,
          price: productPrice
        };
  
        // Guarda la información del producto en localStorage
        localStorage.setItem("productInfo", JSON.stringify(productInfo));
  
        // Redirige a la página del carrito
        window.location.href = "carrito.html";
  
        // Evita que el evento predeterminado del botón (submit) se produzca
        event.preventDefault();
      });
    });
  });
  
