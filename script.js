const btn = document.getElementById('btn');

btn.addEventListener('click', msjWelcome);

function msjWelcome() {
    let name = prompt('Inserte su nombre: ')
    alert('Bienvenido/a ' + name + ', al sistema de consulta.')
}