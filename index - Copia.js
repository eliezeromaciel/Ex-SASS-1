function dispararExercicio1 (){
    const resultado = soma ()
    const valorMostrado = mostraNaTela (resultado)

}

function soma () {
    const elInput01 = document.querySelector ("#ex-01-numero1")
    const elInput02 = document.querySelector ("#ex-01-numero2")     // NÃO INSERE .VALUE , POIS IMPOSSIBILITA VALIDAÇÃO, CASO NÃO DIGITEM NADA.
    
    const valor01 = Number(elInput01.value)
    const valor02 = Number(elInput02.value)

    let resultado = valor01 + valor02
    
    return resultado
}

function mostraNaTela (parametro){ 
    let retorno = document.querySelector ("#valorMostrado")
    retorno.innerHTML = parametro
}


async function dispararExercicio2 () {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const idPokemon = document.querySelector("#idpokemon").value
    
    const pokemon = await pegaNaApi ( url, idPokemon )
    const img = mudaImagem (pokemon)
    
}

async function pegaNaApi (url, idPokemon) {
    const response = await fetch (url + idPokemon)
    responseJson = await response.json()
    return responseJson
}

function mudaImagem (dados){
    let img = document.querySelector("#imgpokemon")
    img.src = dados.sprites.front_default
    
}


