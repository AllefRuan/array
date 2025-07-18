let alunos = ['felipe', 'gabriel', 'klara', 'livia', 'cibele', 'dandara', 'maria clara medeiros', 'maria clara sales', 'joao henrique', 'gabriel felipe', 'rosana'];

alunos = alunos.sort();

for( let i = 0; i < alunos.length; i++) {
    console.log('- ' + alunos[i].toUpperCase());
    
}

if (alunos.indexOf('joao henrique') != -1) {
    console.log('achei voce');
    
}
else{
    console.log('nao achei voce');
    
}

console.log(alunos.includes('klara'));


