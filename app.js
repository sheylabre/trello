window.addEventListener('load', function() {
    var contenedorspan = document.getElementById ("contenedorspan"); 
    var contenedorAgregar = document.getElementById("contenedorAgregar");
    var formulario = document.getElementById("formulario");
    var contenedorTitulo = document.getElementById("titulo");
    var botonguardar = document.getElementById("boton");

    contenedorAgregar.addEventListener("click", function(){
        contenedor();   
    });

    function contenedor(){
        contenedorAgregar.style.display = "none";
        formulario.style.display = "block";
        botonguardar.addEventListener("click", function(){
            formulario.style.display = "none";
            var imprimirTitulo = document.createElement("p");
            contenedorspan.appendChild(imprimirTitulo);
            imprimirTitulo.innerText = contenedorTitulo.value;
            imprimirTitulo.setAttribute("class","imprimirTitulo");
            
            var agregarTarjeta = document.createElement("span");
            contenedorspan.appendChild(agregarTarjeta);
            agregarTarjeta.setAttribute("class","agregarTarjeta");
            agregarTarjeta.innerText = "Añadir Tarjeta...";

        });
    };
});