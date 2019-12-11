let a = []
let b = []
let c = []
for(let i = 0; i <5; i++){
    a[i] = Number(prompt('Digite o valor A'))
}

for(let i = 5; i <10; i++){
    b[i] = Number(prompt('Digite o valor B'))
}

for(let i=0;i<5;i++){
        c[i]=a[i]
}
for(let i=5;i<10;i++){
        c[i]=b[i]
}
for(let i=0;i<10;i++){
    document.write(`${c[i]}<br>`)
}