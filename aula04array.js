let nomes = ['ana', 'bruno', 'carlos', 'diana', 'eduardo'];

// 1 verifique se o nome 'carlos' esta na lista e, se estiver, substitua por 'caio'. includes()
let indiceCarlos = nomes.indexOf('carlos');

if (indiceCarlos != -1) {
    nomes[indiceCarlos] = 'caio';
    
}

// 2 depois, remova o nome 'ana' do array. splice()
let indiceAna = nomes.indexOf('ana');
if(indiceAna != -1){
    nomes.splice(indiceAna, 1);
}

// 3 mostrar o array final
console.log(nomes);

