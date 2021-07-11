const salariesArray = (arr) => arr.map((element) => element.salary)
const salariosColombia = salariesArray(colombia)
console.log(salariosColombia)

const sortArray = (arr) => arr.sort((x, y) => x - y)
const salariosColOrdenados = sortArray(salariosColombia)
console.log(salariosColOrdenados)

const esPar = (num) => (num % 2 === 0)

function calcularMediana (arr) {
    const half = parseInt(arr.length / 2)
    if (esPar(arr)) {
        const half2 = half - 1
        const mediumOfHalfs = (half + half2) / 2 
        return arr[mediumOfHalfs]
    } else {
        const halfElement = arr[half]
        return halfElement
    }
}

const medianaSalariosColombia = calcularMediana(salariosColOrdenados)
console.log(medianaSalariosColombia)