const lista = [10, 20, 30, 40, 45, 5000]
const lista2 = [2, 123, 34, 131, 32, 0.4, 89, 1]

function ordenarLista(arr) {
    return arr.sort((a, b) => a - b)
}

function esPar(num) {
    if (num % 2 === 0) {
        return true
    } return false
}

function calcularMediana(arr) { 
    ordenarLista(arr);
    let mitadLista = parseInt(arr.length / 2);
    if (esPar(arr.length)) {
        return (arr[mitadLista] + arr[mitadLista - 1]) / 2
    } return arr[mitadLista]
}

console.log(ordenarLista(lista2))
console.log(calcularMediana(lista2))