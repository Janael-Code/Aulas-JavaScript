const nome = prompt("Digite seu nome");
let tamanho = nome.length;
let segundaletra = nome.at(1);
let primeiraIndice = nome.at(0);
let ultimoIndice = nome.lastIndexOf(-1);
let tresLetras = nome.slice(3,6);
let palavrasNome = nome.split(" ");
let nomeMaiusculo = nome.toUpperCase();
let nomeMinusculo = nome.toLowerCase();


document.body.innerHTML += `Seu nome é: ${nome} <br />`;
document.body.innerHTML += ` seu nome tem : ${tamanho}  letras <br / >`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaletra}  <br / >`;
document.body.innerHTML += `Qual o primeiro indice no seu nome?: ${primeiraIndice} <br />` ;
document.body.innerHTML += `Qual o último indice da letra no seu nome: ${ultimoIndice} ,<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${tresLetras} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome}<br />`;
document.body.innerHTML += `Seu nome com letas maiúsculas: ${nomeMaiusculo} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo}<br />`;