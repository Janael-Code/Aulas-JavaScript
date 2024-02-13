function criaPessoa (nome, sobrenome, idade){

    return {nome,sobrenome,idade};
}

let pessoa1 = criaPessoa('Luiz', 'Souza', 14);

console.log(pessoa1.nome);