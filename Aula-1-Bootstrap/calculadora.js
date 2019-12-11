let valor1 = document.getElementById("n1")
let valor2 = document.getElementById("n2")
let operacao = document.getElementById("op")
let resultado = document.getElementById("res")
function calcular(){
    if(operacao.value == "adição"){
        let soma = Number(valor1.value) + Number(valor2.value)
        resultado.value = soma
    }else if (operacao.value == "subtração"){
        let menos = Number(valor1.value) - Number(valor2.value)
        resultado.value = menos
    }else if(operacao.value == "multiplicação"){
        let multiplicacao = Number(valor1.value) * Number(valor2.value)
        resultado.value = multiplicacao
    }else if(operacao.value == "divisão"){
        let divisao = Number(valor1.value) / Number(valor2.value)
        resultado.value = divisao
    }else{
        alert("Operação inválida")
    }
}
