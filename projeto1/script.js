let array = [];

console.log("tipo do meu array: " + typeof(array) );

function adicionarNumero(){
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);
    // alert(n)
    let exibirArray = document.querySelector('#exibir-array');

    //se N for nao numerico mostrara um alert e encerrara  a funcao
    if(isNaN(n)) {
        alert('Digite um numero valido!');
        return;
    }

    array.push(n);

    //çimpar o campo de enrada
    input.value = '';

    console.log(array);
    exibirArray.innerHTML = `Array: ${array} <br/>Tamanho do array ${array.length}`;
    
}
