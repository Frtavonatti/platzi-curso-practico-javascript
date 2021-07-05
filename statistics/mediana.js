const lista = [10, 20, 30, 40, 45, 5000]

function calcularMediana(arr) { 
    let mitadLista = arr.length / 2;
    if (arr.length % 2 === 0) {
        return (Math.floor(mitadLista) + Math.round(mitadLista)) / 2
    } return arr[Math.floor(mitadLista)]
}

console.log(calcularMediana(lista))
