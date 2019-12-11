function conv(){
    let v1 = Number(document.getElementById("v1").value)
    let opc = document.getElementById("opc").value
    let res = 0
    if(opc == "dolar"){
        res = v1 / 4.15
    }else if(opc == "euro"){
        res = v1 / 5.10
    }else if(opc == "pesoAg"){
        res = v1 / 0.07
    }else if(opc == "japao"){
        res = v1 / 0.03
    }
    document.getElementById("res").value = res
}