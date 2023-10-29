const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let month = document.getElementById('a');

month.addEventListener('click', msj);

function msj() {
    alert(months[6]);
}