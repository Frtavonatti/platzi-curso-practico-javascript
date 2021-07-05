// Medidas de un Cuadrado
function perimetroCuadrado(lado) {
    let perimetro = lado * 4
    return perimetro
}

function areaCuadrado(lado) {
    let area = lado * lado
    return area
}



// Medidas de un triangulo
const alturaTriangulo = (lado1, lado2, base) => {
    if (lado1 === lado2) {
        return Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4)
    } else return 'No es un triangulo isoceles, no es posible calcular altura'
}



// Medidas de un circulo
function medidasCirculo(r) {
    const PI = Math.PI
    console.log(`El radio del circulo es ${r}`)
    console.log(`El diametro del circulo es ${r * 2}`)
    console.log(`El perimetro del circulo es ${PI * (r * 2)}`)
    console.log(`El area del circulo es ${(r * r) * PI}`)
}


// Interactuar con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value
    const perimeter = perimetroCuadrado(value)
    alert(perimeter)
} 

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
} 