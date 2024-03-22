let n

function verificarNumeroPrimo(n) {
    if(n <= 1){
        console.log("sucumba!")
        return false
    }

    for (let index = 2; index <= Math.sqrt(n); index++) {
        if(n % index == 0){
            console.log("nao primo")
            return false
        }
    }
    console.log("primo")
    return true
}
verificarNumeroPrimo(2) //true
verificarNumeroPrimo(3) //true
verificarNumeroPrimo(10) //false
verificarNumeroPrimo(12) //false