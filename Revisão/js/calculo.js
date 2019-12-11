function calc(){
    let v1 = Number(document.getElementById("v1").value)
    let v2 = Number(document.getElementById("v2").value)
    let opc = document.getElementById("opc").value
    let res = 0
    if(opc == "adição"){
        res = v1 + v2
    }else if(opc == "subtração"){
        res = v1 -v2
    }else if(opc == "multiplicação"){
        res = v1 * v2
    }else if(opc == "divisão"){
        res = v1 / v2
    }
    document.getElementById("res").value = res
}