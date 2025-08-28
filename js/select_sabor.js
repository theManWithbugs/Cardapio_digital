function add_dec_sabores(sabor) {
    let max = carrinho_atual[0]["sabores"];

    if (contador < max) {
        contador += 1;
        sabores.push(sabor);
    }

    localStorage.setItem("sabores_salvos", JSON.stringify(sabores));

    // Dispara evento
    document.dispatchEvent(new CustomEvent("saboresAtualizados", {
        detail: { sabor, contador, max, sabores }
    }));
}

// Carregar sabores salvos ao iniciar
let sabores_salvos = JSON.parse(localStorage.getItem("sabores_salvos")) || [];
sabores = sabores_salvos;
contador = sabores.length;

// Atualiza interface ao carregar
atualizarInterface({ sabores });

// Listener para atualizar interface em tempo real
document.addEventListener("saboresAtualizados", function (e) {
    atualizarInterface(e.detail);
});

// Função que atualiza a interface
function atualizarInterface({ sabores }) {
    const lista = document.getElementById("listaSabores");
    lista.innerHTML = ""; // limpa antes

    sabores.forEach(s => {
        let li = document.createElement("li");
        li.textContent = s;
        lista.appendChild(li);
    });
}
