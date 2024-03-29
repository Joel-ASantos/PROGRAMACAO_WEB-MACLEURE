let matriz = [
    [1, 2, 3],
    [4, 5, 6]
]
function printMatriz(B) {
    for(let i = 0; i < B.length; i++){
        console.log(B[i].join("\t"))
    }   
}
function transporMatriz(A) {
    console.log("Antes:\n")
    printMatriz(A)
    
    const matrizTransposta = []
    const linha = A.length
    const colunas = A[0].length

    for (let j = 0; j < colunas; j++) {
        matrizTransposta[j] = []    
    }

    for (let i = 0; i < linha; i++) {
        for (let j = 0; j < colunas; j++) {
            matrizTransposta[j][i] = A[i][j]    
        }   
    }
    console.log("\nDepois:\n")
    printMatriz(matrizTransposta)
}
transporMatriz(matriz)