let produto = []
function criarProduto(id,nome,qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p
}
function adicionarProduto(p) {
    produto.push(p)
}
function listarProdutos() {
    return produto
}
function removerProduto(id){
    produto = produto.filter((p)=> {
        return p.id != id
    })
}
let pessoa = {
    nome: "João",
    tel: 128394
}
module.exports={
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto
}