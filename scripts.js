// scripts.js

// Espera a que el documento esté completamente cargado antes de ejecutar cualquier JavaScript
$(document).ready(function() {
    // Agrega event listeners u otra funcionalidad de JavaScript aquí

    // Ejemplo: Ocultar/mostrar texto al hacer clic en un botón
    $("#hideText_btn_1").click(function() {
        $("#descripcion-noticia").toggle(); // Alternar la visibilidad del texto de descripción
    });
});