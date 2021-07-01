function calcularPrecioConDescuento(precio, descuento) {
    return precio * ((100 - descuento)/100)
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice');
    const price = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount');
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    
    const result = document.getElementById('ResultP');
    result.innerText = `El precio con descuento son: $${precioConDescuento}`
}

console.log(onClickButtonPriceDiscount())
