const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
let carros = "";
function gruposDeCarros(nomes,posicao) {
    let nome = ""
    nome = nomes.slice(posicao, posicao + 3)
    carros = nome.join(" - ")

console.log(carros)
}


gruposDeCarros(nomes,posicao)