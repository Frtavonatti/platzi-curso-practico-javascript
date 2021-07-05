function calcularPrecioConDescuento(precio, descuento) {
    return precio * ((100 - descuento)/100)
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice');
    const price = inputPrice.value;

    // const inputDiscount = document.getElementById('InputDiscount');
    // const discount = inputDiscount.value;

    const inputCupon = document.getElementById('InputCoupon');
    const couponValue = inputCupon.value;

    const coupons = [
        'cupon1',
        'cupon2',
        'cupon3'
    ]
    
    if (couponValue === coupons[0]) {
        discount = 10
    } else if (couponValue === coupons[1]) {
        discount = 15
    } else if (couponValue === coupons[2]){
        discount = 20 
    } else console.log('El cupon ingresado no existe')

    const precioConDescuento = calcularPrecioConDescuento(price, discount);

    const result = document.getElementById('ResultP');
    result.innerText = `El precio con descuento son: $${precioConDescuento}`
}

console.log(onClickButtonPriceDiscount())