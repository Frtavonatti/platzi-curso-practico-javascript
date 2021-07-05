const lista = [10, 20, 30, 40, 45, 5000]
const lista2 = [2, 123, 34, 131, 32, 0.4, 89]

function ordenarLista(arr) {
    return arr.sort((a, b) => a - b)
}

function calcularMediana(arr) { 
    ordenarLista(arr);
    let mitadLista = parseInt(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mitadLista] + arr[mitadLista - 1]) / 2
    } return arr[mitadLista]
}

console.log(calcularMediana(lista2))
// console.log(ordenarLista(lista2))