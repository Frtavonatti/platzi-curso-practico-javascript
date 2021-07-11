const asignaturas = [
    finanzas = {
        nota: 45,
        porcentaje: 10
    },
    matematica = {
        nota: 30,
        porcentaje: 25
    },
    marketing = {
        nota: 65,
        porcentaje: 15
    },
    programacion = {
        nota: 70,
        porcentaje: 50
    }
]

const notasPonderadas = (arr) => arr.map(function(obj) {
    return obj.nota * obj.porcentaje
}); 

const calcularMediaPonderada = (arr) => {
    let suma = notasPonderadas(arr).reduce((accumulator, currentValue) => accumulator + currentValue)
    let totalCreditos = sumarCreditos(arr)
    return suma / totalCreditos
}

const sumarCreditos = (arr) => {
    let listaCreditos = arr.map((obj) => obj.porcentaje)
    let totalCreditos = listaCreditos.reduce((x, y) => x + y)
    return totalCreditos
}

console.log(calcularMediaPonderada(asignaturas))

// Otra opción para calcular la suma de porcentajes
// let creditos = 0;
// for (let ramo in asignaturas) {
//     creditos += asignaturas[ramo].porcentaje;
// } console.log(creditos)