window.addEventListener('load', function() {
    var contentGeneral = document.getElementById("contenedorGeneral");
    var contenedorspan = document.getElementById ("contenedorspan"); 
    var contenedorAgregar = document.getElementById("contenedorAgregar");
    var formulario = document.getElementById("formulario");
    var contenedorTitulo = document.getElementById("titulo");
    var botonguardar = document.getElementById("boton");

    contenedorAgregar.addEventListener("click", function(){
        gg();
    }); 
    botonguardar.addEventListener("click", function(){
        contenedor();
    });

    function gg(){
        contenedorAgregar.style.display = "none";
        formulario.style.display = "inline-block";
        contenedorTitulo.focus();
    }

    function contenedor(){
      //  contenedorGeneral.appendChild(contenedorspan);
        // botonguardar.addEventListener("click", function(){
            formulario.style.display = "none";

            var imprimirTitulo = document.createElement("span");
            contenedorAgregar.parentElement.appendChild(imprimirTitulo);
            imprimirTitulo.innerText = contenedorTitulo.value;
            imprimirTitulo.setAttribute("class","imprimirTitulo");

            var agregarTarjeta = document.createElement("span");
            agregarTarjeta.setAttribute("class","agregarTarjeta");
            agregarTarjeta.innerText = "Añadir Tarjeta...";
            contenedorAgregar.parentElement.appendChild(agregarTarjeta);

            agregarTarjeta.addEventListener("click", function(){
            agregarTarjeta.style.display = "none";

            var textArea = document.createElement("textarea"); 
            textArea.setAttribute("cols","33");   
            textArea.setAttribute("class","textArea"); 

            var contentxtArea = document.createElement("div");
            contentxtArea.classList.add("contentxtArea");
            contentxtArea.appendChild(textArea);
            contenedorspan.insertBefore(contentxtArea, agregarTarjeta);

            var botonGuardarTxtArea = document.createElement("button");
            botonGuardarTxtArea.classList.add("botonGuardarTxtArea");
            contentxtArea.appendChild(botonGuardarTxtArea);
            botonGuardarTxtArea.innerText = "Enviar";

            botonGuardarTxtArea.addEventListener("click", function(){
            textArea.style.display = "none";
            botonGuardarTxtArea.style.display = "none";

            var resultadoTextArea = document.createElement("span");
            contentxtArea.appendChild(resultadoTextArea);
            resultadoTextArea.innerText = textArea.value;
            agregarTarjeta.style.display = "inline-block";

            });
            
            });

            agregarContenedor();

            // });

        function agregarContenedor(){
            var contenLista = document.createElement("div");
            contenedorGeneral.appendChild(contenLista);
            contenLista.classList.add("contenLista");
            contenLista.appendChild(contenedorAgregar);
            contenLista.appendChild(formulario);
            contenedorAgregar.style.display = "inline-block";
            // formulario.appendChild(imprimirTitulo);
            // formulario.appendChild(agregarTarjeta);
        }
     
    };
});