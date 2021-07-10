const lista = [0, 1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]
const count = {}

const contar = (arr) => arr.map(
    function(element) {
        if (count[element]) {
            count[element] += 1;
        } 
        else count[element] = 1;
    }
);

const listaArray = ((obj) => Object.entries(obj).sort(
    (valorAcumulado, nuevoValor) =>  nuevoValor[1] - valorAcumulado[1]
))

function calcularModa(arr) {
    contar(arr)
    listaArray(arr)
    let moda = listaArray(count)[0][0]
    return moda;
}

console.log(calcularModa(lista))

// function calcularModa(arr) {
//     arr.map(
//         function(element) {
//             if (count[element]) {
//                 count[element] += 1;
//             } 
//             else count[element] = 1;
//         }
//     );

//     Object.entries(arr).sort(
//         (valorAcumulado, nuevoValor) =>  nuevoValor[1] - valorAcumulado[1]
//     )

//     let moda = listaArray(count)[0][0]
//     return moda;
// }
