function soma(a,b) {
    return Number(a) + Number(b)    
}

function sub(a,b) {
    return Number(a) - Number(b)
}

function mult(a,b) {
    return Number(a) * Number(b)
}

function div(a,b) {
    if (b == 0) {
        return console.log("Não existe divisão por 0")
    }else{
        return Number(a) / Number(b)
    }
}

module.exports ={
    soma,
    sub,
    mult,
    div
}