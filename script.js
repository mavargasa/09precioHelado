function calcularPrecio() {
    var topping = document.getElementById('topping').value;

    var precioHelado = calcularPrecioHelado(topping);

    document.getElementById('precio-helado').textContent = precioHelado + ' MXN';

    document.getElementById('resultado').classList.remove('pantallaOcualta');
}

function calcularPrecioHelado(topping) {
    var precioHelado = 50;

    switch (topping) {
        case 'oreo':
            precioHelado += 10;
            break;
        case 'kitkat':
            precioHelado += 15;
            break;
        case 'brownie':
            precioHelado += 20;
            break;
        default:
            return 'No tenemos este topping, lo sentimos. Su valor a pagar es:' + precioHelado;
    }

    return precioHelado;
}
