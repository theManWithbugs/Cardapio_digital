fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })

let sabores = [];
let carrinho = []
let total = 0
let contador = 0;

const pizza_gg = {nome: 'pizza_gg', valor: 64.99, quant_sabores: 4}
const pizza_g = {nome: 'pizza_g', valor: 59.99, quant_sabores: 3}
const pizza_m = {nome: 'pizza_m', valor: 45.99, quant_sabores: 2}
const pizza_p = {nome: 'pizza_p', valor: 39.99, quant_sabores: 1}

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
        valor: produto.valor,
        sabores: produto.quant_sabores,
    });

    total += produto.valor;

    //Variavel
    // let nome = "Wilian";
    // localStorage.setItem("nomeUsuario", nome);

    // Array ou objeto
    // let config = { tema: "escuro", fonte: "Arial" };
    // localStorage.setItem("configuracoes", JSON.stringify(config));

    // Salva o array carrinho no localStorage
    localStorage.setItem("carrinho_atual", JSON.stringify(carrinho));

    console.log("Carrinho:", carrinho);
    console.log("Total: R$", total.toFixed(2));
    console.log("Sabores:", carrinho[0]["sabores"])

    return total.toFixed(2);
}

let carrinho_atual = JSON.parse(localStorage.getItem("carrinho_atual"));

// box_sabores = document.getElementById('sabores_selec');

// sabor_1 = document.createElement('p');
// sabor_1.innerHTML = sabores[0];

// box_sabores.appendChild(sabor_1);


document.addEventListener('DOMContentLoaded', function() {
    console.log(carrinho_atual);
})

function enviar_dados(event) {
    event.preventDefault();

    const numero = "5568992092399";
    const form = event.target
    const formData = new FormData(form);

    mensagem = formData.get("mensagem");

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// quant_texto = document.querySelectorAll('quant');

// let max = 0
// let contador = 0;

// function tamanho_pizza(tamanho) {

//     if (tamanho === 'pizza_gg') {
//         max = 4;
//     } else if (tamanho === 'pizza_g') {
//         max = 3
//     } else if (tamanho === 'pizza_m') {
//         max = 2
//     } else if (tamanho === 'pizza_p') {
//         max = 1
//     } else {
//         console.log("Produto inválido");
//         return;
//     }
//     console.log(max);
// }

// function incrementar() {
//     if (contador < max) {
//         contador += 1;
//     }
//     console.log("Contador:", contador);
//     return contador
// }

// function decrementar() {
//     if (contador > 0) {
//         contador -= 1;
//     }
//     console.log("Contador:", contador);
//     return contador
// }

function not_found_alert() {
    Swal.fire({
    imageUrl: "img/n_disponivel_img.png",
    imageHeight: 500,
    imageAlt: "A tall image",
    });
};
