const lista = [10, 20, 30, 40, 50]
let suma = 0;

function calcularPromedio(arr) {
    for (i = 0; i < arr.length; i++) {
       suma += arr[i]
    } return (suma / arr.length)
}

const calcularPromedio2 = (arr) => {
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    sum = arr.reduce(reducer)
    return sum / arr.length
}

console.log(suma)
console.log(calcularPromedio(lista))
console.log(suma)

console.log(calcularPromedio2(lista))
console.log(sum)