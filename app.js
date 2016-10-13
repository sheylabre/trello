window.addEventListener('load', function() {
    var contentGeneral = document.getElementById("contenedorGeneral");
    var contenedorspan = document.getElementById ("contenedorspan"); 
    var contenedorAgregar = document.getElementById("contenedorAgregar");
    var formulario = document.getElementById("formulario");
    var contenedorTitulo = document.getElementById("titulo");
    var botonguardar = document.getElementById("boton");

    contenedorAgregar.addEventListener("click", function(){
        contenedor();
        contenedorTitulo.focus();
    }); 

    function contenedor(){
        contenedorAgregar.style.display = "none";
        formulario.style.display = "block";

        botonguardar.addEventListener("click", function(){
            formulario.style.display = "none";

            var imprimirTitulo = document.createElement("span");
            contenedorspan.appendChild(imprimirTitulo);
            imprimirTitulo.innerText = contenedorTitulo.value;
            imprimirTitulo.setAttribute("class","imprimirTitulo");

            var agregarTarjeta = document.createElement("span");
            contenedorspan.appendChild(agregarTarjeta);
            agregarTarjeta.setAttribute("class","agregarTarjeta");
            agregarTarjeta.innerText = "Añadir Tarjeta...";


            agregarTarjeta.addEventListener("click", function(){
            agregarTarjeta.style.display = "none";

            var textArea = document.createElement("textarea"); 
            textArea.setAttribute("cols","33");   
            textArea.setAttribute("class","textArea"); 

            var contentxtArea =document.createElement("div");
            contentxtArea.classList.add("contentxtArea");
            contenedorspan.appendChild(contentxtArea);
            contentxtArea.appendChild(textArea);

            var botonGuardarTxtArea = document.createElement("button");
            botonGuardarTxtArea.classList.add("botonGuardarTxtArea");
            contentxtArea.appendChild(botonGuardarTxtArea);
            botonGuardarTxtArea.innerText = "Enviar";

            
            });

  //          agregarContenedor();

        });
/*
        function agregarContenedor(){
            var contenLista = document.createElement("div");
            contenLista.classList.add("contenLista");
            contenedorGeneral.appendChild(contenLista);
            contenLista.appendChild(contenedorAgregar);
            contenLista.appendChild(formulario);
            contenedorAgregar.style.display = "block";
        }
   */     
    };
});