const nome = 'luiz';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
let anoAtual = 2024;

imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;
// template string melhor forma ${variavel} Usar Craser no começo ` 
console.log(`Seu nome é ${nome} ${sobrenome} Sua idade ${idade} Seu Imc ${imc} Nascido em ${anoNascimento}`);