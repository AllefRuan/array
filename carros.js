let carros = [];
// adicionando elementps no array
carros.push('corolla');
carros.push('sw4');
carros.push('onix');
carros.push('fusca');

//alterando elementos no array
carros[2] = "amarok";

//removendo o ultimo elemento
carros.pop();

//adicionando mais elemenos no array
carros.push('l200');
carros.push('a3');
carros.push('uno');

//percorrendo o array
for(let i = 0; i < carros.length; i ++){
console.log("Ìndice: " + (i + 1) );
console.log("valor: " + carros[i]);
console.log();
}

