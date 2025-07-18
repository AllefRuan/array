let frutas = ['maçã', 'Banana', 'laranja'];

let indice = frutas.indexOf('Banana');
 
if(indice !== -1) {
    // frutas[indice] = 'uva'
    frutas.splice(indice, 2);
}
console.log(frutas);

    