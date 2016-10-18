window.addEventListener('load', function() {
    var contentGeneral = document.getElementById("contenedorGeneral");
    var subcontenedor = document.getElementById ("subcontenedor"); 
    var contenedorGreen = document.getElementById("contenedorGreen");
    var formulario = document.getElementById("formulario");
    var contenedorTitulo = document.getElementById("titulo");
    var botonguardar = document.getElementById("boton");

    contenedorGreen.addEventListener("click", function(){
        subcontenedor2();
    }); 

    botonguardar.addEventListener("click", function(){
        contenedor();
    });

    function subcontenedor2(){
        contenedorGreen.style.display = "none";
        formulario.style.display = "inline-block";
        contenedorTitulo.focus();
    }

    function contenedor(){
            formulario.style.display = "none";

            var imprimirTitulo = document.createElement("span");
            contenedorGreen.parentElement.appendChild(imprimirTitulo);
            imprimirTitulo.innerText = contenedorTitulo.value;
            imprimirTitulo.setAttribute("class","imprimirTitulo");

            var aniadirTarjeta = document.createElement("span");
            aniadirTarjeta.setAttribute("class","aniadirTarjeta");
            aniadirTarjeta.innerText = "Añadir Tarjeta...";
            contenedorGreen.parentElement.appendChild(aniadirTarjeta);

            aniadirTarjeta.addEventListener("click", function(){
            aniadirTarjeta.style.display = "none";

            var textArea = document.createElement("textarea"); 
            textArea.setAttribute("cols","33");   
            textArea.setAttribute("class","textArea"); 

            var contentxtArea = document.createElement("div");
            contentxtArea.classList.add("contentxtArea");
            contentxtArea.appendChild(textArea);
            imprimirTitulo.parentElement.insertBefore(contentxtArea, imprimirTitulo.parentElement.children[1]);

            var botonGuardarTxtArea = document.createElement("button");
            botonGuardarTxtArea.classList.add("botonGuardarTxtArea");
            contentxtArea.appendChild(botonGuardarTxtArea);
            botonGuardarTxtArea.innerText = "Enviar";

            botonGuardarTxtArea.addEventListener("click", function(){
            textArea.style.display = "none";
            botonGuardarTxtArea.style.display = "none";

            var resultadoTextArea = document.createElement("span");
           // contentxtArea.insertBefore(resultadoTextArea, contentxtArea.children[0]); 
            resultadoTextArea.innerText = textArea.value;
            aniadirTarjeta.style.display = "inline-block";

            var contenedorResultadoTextArea = document.createElement("div");
            contenedorResultadoTextArea.appendChild(resultadoTextArea);
            contentxtArea.appendChild(contenedorResultadoTextArea);
            contenedorResultadoTextArea.classList.add("contenedorResultadoTextArea");

            });
            
            });

            agregarContenedor();

            // });

        function agregarContenedor(){
            var contenLista = document.createElement("div");
            contenedorGeneral.appendChild(contenLista);
            contenLista.classList.add("contenLista");
            contenLista.appendChild(contenedorGreen);
            contenLista.appendChild(formulario);
            contenedorGreen.style.display = "inline-block";
        }
     
    };
});