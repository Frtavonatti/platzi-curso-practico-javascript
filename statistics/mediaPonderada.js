const semestre = [
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

function calcularMediaPonderada(arr) {
    arr.forEach(element => {
        return element[0] * element[1]
    });
}

console.log(calcularMediaPonderada(semetre))