var btn = document.getElementById("btn");
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modalTitle");
var btnClose = document.getElementById("btnClose");
var textModal =  document.getElementById("textModal");
var close = document.getElementById("close");


    btn.onclick = function () {
        let num = prompt("Inserte un numero entre 1-10");
        let result = "";
        // El titulo del modal sera: Tabla del "numero insertado" 
        modalTitle.innerHTML = "Tabla del " + num;
        if (num >= 1 && num <= 10) {
            for (let i = 0; i <= 12; i++) {
                result += num + " x " + i + " = " + num * i + "<br>";
            }
            // Con esto se mostrara la tabla el modal
            textModal.innerHTML = result;
            modal.style.display = "block";
        } else {
            // En caso de que el usuario no inserte un numero admitido
            alert("El valor digitado no es admitido, por favor inserte un valor del 1-10.");
        }

        // Boton cerrar al final del modalbox
        btnClose.onclick = function () {
            modal.style.display = "none";
        };

        // "x" al inicio del modalbox, igual para cerrarlo
        close.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }