function cads(){
    let nome = document.getElementById("v1").value;
    let mdnome = nome.slice(6,14);
    let titulo = document.getElementById("v2").value;
    let mdtitulo = titulo.slice(0, 3)
    let cuzcuz = mdtitulo.toUpperCase();
    let retitulo = titulo.slice(3, 15);
    let nedicao = document.getElementById("v3").value;
    let lopubli = document.getElementById("v4").value;
    let neditora = document.getElementById("v5").value;
    let ano = document.getElementById("v6").value;
    alert(mdnome + ", E.  " + cuzcuz + retitulo + ":  " + nedicao + ".  " + "ed.  " + lopubli + ":  " + neditora + ",  " + ano)
}