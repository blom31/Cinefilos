/* === esta  primera línea del documneto garantiza que todos los elemntos del html esten cargados en el DOM   */
document.addEventListener('DOMContentLoaded', function() {

    function showPopup(card) {
        const popup = card.querySelector('.popup');
        popup.style.right = '0';
        popup.style.display = 'block';
    }
    
    function hidePopup(card) {
        const popup = card.querySelector('.popup');
        popup.style.right = '-350px'; // Oculta la ventana emergente al lado izquierdo
        popup.style.display = 'none';
    }

})/* esto cierra la funcion del DOM*/