window.onload = function() {
    let selector = document.getElementById('select');
    let resultado = document.getElementById('result');

    selector.addEventListener('change', function() {

        resultado.innerHTML = '';
        
        //Llamar la opcion seleccionada para mostrar su valor
        let tabla = this.value;

        if(tabla == 0){
            return;
        }
        
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let headRow = document.createElement('tr');
        
        ["Multiplicando", "Multiplicador", "Resultado"].forEach(function(text) {
            let th = document.createElement('th');
            th.textContent = text;
            headRow.appendChild(th);
        });
        
        thead.appendChild(headRow);
        table.appendChild(thead);
        
        // Crea y muestra la tabla seleccionada
        for (let i = 1; i <= 12; i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = tabla;
            td2.textContent = i;
            td3.textContent = tabla * i;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tbody.appendChild(tr);
        }

        table.appendChild(tbody);
        resultado.appendChild(table);
    });
};
