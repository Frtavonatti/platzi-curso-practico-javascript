const salariesArray = (arr) => arr.map((element) => element.salary)
const salariosColombia = salariesArray(colombia)
console.log(salariosColombia)

const sortArray = (arr) => arr.sort((x, y) => x - y)
const salariosColOrdenados = sortArray(salariosColombia)
console.log(salariosColOrdenados)

function calcularMediana (arr) {
    const esPar = (num) => (num % 2 === 0)
    const half = parseInt(arr.length / 2)
    if (esPar(arr.length)) {
        const half2 = half - 1
        const mediumOfHalfs = (arr[half ]+ arr[half2]) / 2 
        return mediumOfHalfs
    } else {
        const halfElement = arr[half]
        return halfElement
    }
}

const medianaSalariosColombia = calcularMediana(salariosColOrdenados)
console.log(medianaSalariosColombia)

const topTenPercent = (arr) => {
    const tenPercent = parseInt(arr.length * 0.1)    
    const startIndex = arr.length - tenPercent
    return arr.splice(startIndex, tenPercent)
} 

const topTenPercentColombiaSalaries = topTenPercent(salariosColOrdenados)
console.log(topTenPercentColombiaSalaries)

console.log(calcularMediana(topTenPercentColombiaSalaries))