const filmes = [
    "O Poderoso Chefão",
    "O Poderoso Chefão II",
    "O Poderoso Chefão III"
]

console.log(filmes)

const filmeInfo = filmes.map((filmes, index) => {
    return `Filme ${index + 1}: ${filmes}`
})

console.log(filmeInfo)

const filmeInfoMod = (listaFilmes) => {
    return listaFilmes.map((filmes) => {
        return filmes.toUpperCase()
    })
}

console.log(filmeInfoMod(filmes))


const precos = [10, 20, 30, 40, 50]

const precosMod = (listaPrecos, desc) => {
    return listaPrecos.map((preco) => {
        return preco * desc
    })
}

console.log(precosMod(precos, 0.9)) // 10% de desconto

const precosFilter = (listaPrecos, desc) => {
    return listaPrecos
    .filter((precoAtual) => {
        return precoAtual < 30
    })
    .map((precoAtual) => {
        return precoAtual * desc
    })
}

console.log(precosFilter(precos, 0.9)) // Filtra preços menores que 30

const filmesTop = [
    { 
        nome: "O Poderoso Chefão", 
        nota: 9.2, 
        atores: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    { 
        nome: "O Poderoso Chefão II", 
        nota: 9.0, 
        atores: ["Al Pacino", "James Caan"] 
    },
    { 
        nome: "O Poderoso Chefão III", 
        nota: 7.6, 
        atores: ["Al Pacino"] 
    }
]

console.log(filmesTop[0].atores)

const cardFilmes = (listaFilmes) => {
    listaFilmes.map((precosFilter) => {
        return `
        <div class="card">
            <h2>${precosFilter.nome}</h2>
            <p>Nota: ${precosFilter.nota}</p>
            <p>Atores: ${precosFilter.atores.join(", ")}</p>
        </div>
        `
    })
}