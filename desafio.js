const produtos = [
    { nome: "Produto 1", preco: 100 },
    { nome: "Produto 2", preco: 200 },
    { nome: "Produto 3", preco: 300 }
];

const precosComDesconto = produtos.map(produto => produto.preco * 0.9);

console.log(precosComDesconto);