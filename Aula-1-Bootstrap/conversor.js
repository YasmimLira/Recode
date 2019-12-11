let valor = document.getElementById("n1")
let moeda = document.getElementById("moeda")
let resultado = document.getElementById("res")
function conversor(){
    if(moeda.value == "dolar"){
        let conv = Number(valor.value) / 4.15
        resultado.value = conv.toFixed(3)
    }else if(moeda.value == "euro"){
        let conv = Number(valor.value) / 5.10
        resultado.value = conv.toFixed(3)
    }else if(moeda.value == "pesoAg"){
        let conv = Number(valor.value) / 0.07
        resultado.value = conv.toFixed(3)
    }else if(moeda.value == "japao"){
        let conv = Number(valor.value) / 0.03
        resultado.value = conv.toFixed(3)
    }else{
        alert("Inválido")
    } 
}
