// Execicio alterar valores de variaves javaScripts

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let temp = varA; // Salva o valor original de varA ('A')
// varA = varB;     // varA recebe o valor original de varB ('B')
// varB = varC;     // varB recebe o valor original de varC ('C')
// varC = temp;     // varC recebe o valor original de varA ('A')

// outra forma seria com Lista

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);