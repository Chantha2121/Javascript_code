function sum(...agrs){
    return agrs.reduce((accumlator, currentvalue) => accumlator + currentvalue, 0)
}

console.log(sum(2,4))
console.log(sum(23,7,4))
console.log(sum(2,4,6,4))