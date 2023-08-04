const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


function divisaoDeGrupos(nomes, tamanhoDoGrupo) {
    let grupo1 = "";
    grupo1 = nomes.slice(0, tamanhoDoGrupo)
    let grupo2 = nomes.slice(tamanhoDoGrupo)
    console.log(grupo1)
    console.log(grupo2)
}

divisaoDeGrupos(nomes, tamanhoDoGrupo)