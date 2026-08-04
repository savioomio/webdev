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

const precosMod = (listaPrecos) => {
    return listaPrecos.map((preco) => {
        return preco * 0.9
    })
}

console.log(precosMod(precos))