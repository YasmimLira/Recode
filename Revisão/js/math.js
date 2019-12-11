function calcular(){
    let v1 = Number(document.getElementById("v1").value)
    let v2 = Number(document.getElementById("v2").value)
    let opc = document.getElementById("opc").value
    let res = 0
    if(opc == "adição"){
        res = Math.pow(v1,v2)
    }else if(opc == "minimo"){
        res = Math.min(v1,v2)
    }else if(opc == "maximo"){
        res = Math.max(v1,v2)
    }else if(opc == "raizquad"){
        res = Math.sqrt(v1)
    }
    document.getElementById("res").value = res
}