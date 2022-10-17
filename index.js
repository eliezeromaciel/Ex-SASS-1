function dispararExercicio1 (){
    
    const entr1 = document.querySelector ("#ex-01-numero1")
    const entr2 = document.querySelector ("#ex-01-numero2")
    const num1 = Number (entr1.value)
    const num2 = Number (entr2.value)

    const validacao =  validaDados (num1,num2)

    const resultado = soma (num1, num2, validacao)
    const mudanca = mudaTela (resultado)
}


function soma (num1, num2, validacao) {    
    if (validacao) {
        const resultado = num1 + num2
        return resultado
    } else {
        return false
    }
      
}


function validaDados (num1, num2) {
    if (num1 != "" && num2 !="") {
        return true
    } else {
        alert ('faltam dados')
        return false
    }
}  

function mudaTela (resultado){
    const divResultado = document.querySelector ("#valorMostrado")
    divResultado.innerHTML = resultado

}