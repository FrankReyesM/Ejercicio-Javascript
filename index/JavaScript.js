
document.getElementById('calcular').addEventListener('click', function() {
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const cantidadRetiro = parseFloat(document.getElementById('cantidadRetiro').value);

    if (!isNaN(cantidadRetiro)) {
        const billetes100 = Math.floor(cantidadRetiro / 100);
        const billetes50 = Math.floor((cantidadRetiro % 100) / 50);
        const billetes20 = Math.floor(((cantidadRetiro % 100) % 50) / 20);
        const billetes10 = Math.floor((((cantidadRetiro % 100) % 50) % 20) / 10);
        const billetes5 = Math.floor(((((cantidadRetiro % 100) % 50) % 20) % 10) / 5);
        const billetes1 = Math.floor((((((cantidadRetiro % 100) % 50) % 20) % 10) % 5) / 1);

        const resultado = `
        <div class="result-row">
            <div class="result-col-left">Billetes de 100: ${billetes100}</div>
            <div class="result-col-right">Billetes de 10: ${billetes10}</div>
        </div>
        <div class="result-row">
            <div class="result-col-left">Billetes de 50: ${billetes50}</div>
            <div class="result-col-right">Billetes de 5: ${billetes5}</div>
        </div>
        <div class="result-row">
            <div class="result-col-left">Billetes de 20: ${billetes20}</div>
            <div class="result-col-right">Billetes de 1: ${billetes1}</div>
        </div>
    `;

        document.getElementById('resultado').innerHTML = resultado;

        document.getElementById('nombreUsuarioContainer').innerHTML = `Bienvenido ${nombreUsuario}, su transaccion de ${cantidadRetiro}$ se ha realizado de la siguiente forma: `;

    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
});

document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('nombreUsuarioContainer').innerHTML = '';
    
    document.getElementById('nombreUsuario').value = '';
    document.getElementById('cantidadRetiro').value = '';
});





