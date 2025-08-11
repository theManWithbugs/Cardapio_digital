exibir_nome = document.getElementById('carrinho_nome');

exibir_valor = document.getElementById('carrinho_valor');

exibir_nome.textContent = `Nome: ${carrinho_atual[0]["nome"]} `;
exibir_valor.textContent = `Valor: ${carrinho_atual[0]["valor"]} `;