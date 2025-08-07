fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })


let carrinho = []
let total = 0

const pizza_gg = {nome: 'pizza_gg', valor: 64.99}
const pizza_g = {nome: 'pizza_g', valor: 59.99}
const pizza_m = {nome: 'pizza_m', valor: 45.99}
const pizza_p = {nome: 'pizza_p', valor: 39.99}

function add_produto(nome) {
    let produto = null;

    if (nome === 'pizza_gg') {
        produto = pizza_gg;
    } else if (nome === 'pizza_g') {
        produto = pizza_g;
    } else if (nome === 'pizza_m') {
        produto = pizza_m;
    } else if (nome === 'pizza_p') {
        produto = pizza_p;
    } else {
        console.log("Produto inválido");
        return;
    }

    carrinho.push({
        nome: produto.nome,
        valor: produto.valor
    });

    total += produto.valor;

    console.log("Carrinho:", carrinho);
    console.log("Total: R$", total.toFixed(2));

    return total.toFixed(2);
}

localStorage.setItem('carrinho', JSON.stringify(carrinho));

let carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
console.log(carrinhoSalvo);

function enviar_dados(event) {
    event.preventDefault();

    const numero = "5568992092399";
    const form = event.target
    const formData = new FormData(form);

    mensagem = formData.get("mensagem");

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
