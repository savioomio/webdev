// =============================================================
// AULA: Consumindo API + filter/map no DOM
// API usada: https://fakestoreapi.com  (não precisa de token)
// =============================================================

const URL_PRODUTOS = "https://fakestoreapi.com/products";
let produtos = [];

const buscarProdutos = async () => {
    const response = await fetch(URL_PRODUTOS);
    const data = await response.json();
    produtos = data;
    
    exibirProdutos(produtos);
}

const exibirProdutos = produtos => {
    const grid = document.querySelector('#grid-todos');
    grid.innerHTML = ''

    produtos.forEach(produto => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}" />
        <h3>${produto.title}</h3>
        <p class="preco">R$ ${produto.price.toFixed(2)}</p>
        <p class="avaliacao">⭐ ${produto.rating.rate} (${produto.rating.count} avaliações)</p>`

        grid.append(card)
    })
}

buscarProdutos();




