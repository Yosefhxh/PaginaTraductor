
// Resaltar el enlace activo en el menú de navegación
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remover la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));

        // Añadir la clase 'active' al enlace seleccionado
        this.classList.add('active');
    });
});

// Añadir alertas al hacer clic en iconos de redes sociales
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();  // Previene el comportamiento por defecto del enlace
        alert(`Te estás dirigiendo a ${this.textContent}`);
    });
});


