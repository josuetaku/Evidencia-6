const num = document.getElementById('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function compEdad(){
    if (num.value >= 18) {
        alert('Bienvenido, usted tiene acceso a todos nuestros servicios.');
    } else {
        alert('Bienvenido, usted tiene acceso a servicios limitados.');
    }   
});