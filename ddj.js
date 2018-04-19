const produtoss = ['uva','pera','manga','umbu','maca']
const produ= []

let prod = "peraa"
console.log(produtoss)

//pera sendo incrementado no tamanho da lista
produtoss.forEach(function(nome){
    if( prod != nome){
        produ.push(prod)
    }else{
        console.log("produtos ja existe na lista, tente outro")
    }

    
})

console.log(produ)

