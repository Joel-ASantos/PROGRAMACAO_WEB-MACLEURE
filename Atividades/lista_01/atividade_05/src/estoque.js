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

function EditarQtd(id,qtd) {
    const update = produto.find(p => p.id == id)
    if(update){
        update.qtd = qtd
        return update
    }else{
        return console.log("id não encontrado")
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    EditarQtd
}