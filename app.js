window.addEventListener('load', function() {
    var contenedorspan = document.getElementById ("contenedorspan"); 
    var contenedorAgregar = document.getElementById("contenedorAgregar");
    var formulario = document.getElementById("formulario");
    var contenedorTitulo = document.getElementById("titulo");
    var botonguardar = document.getElementById("boton");

    contenedorAgregar.addEventListener("click", function(){
        contenedor();   
    }   );

    function contenedor(){
        contenedorAgregar.style.display = "none";
        formulario.style.display = "block";

    };
});