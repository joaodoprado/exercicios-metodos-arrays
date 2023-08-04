const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const petPerdido = "Max";

function encontrarPet(usuarios, petPerdido) {
    for (let usuario of usuarios) {
        i = 0; i < usuarios.length; 
        if (usuario.pets[i] == petPerdido) {
            return (`O dono(a) do(a) ${petPerdido} é o(a) ${usuario.nome}`)
        } else {
            return (`Que pena ${petPerdido}, não encontramos seu dono(a)`)
        }
        i++
    }
}

console.log(encontrarPet(usuarios,petPerdido))