<!-- Calculadora -->

const a = 5;
const b = 7;

console.log('Adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

<!-- Maior de dois números -->

let d = Math.max(a, b);
console.log("O maior é: " + d)

<!-- Maior de três números -->
const c = 11;
let e = Math.max(a, b, c);
console.log("O maior é: " + e)

<!-- Negativo, positivo ou zero? -->

const f = 0;

if (f > 0) {
    console.log('Positivo');
  } 
    else if (f < 0) {
    console.log('Negativo');
  }
    else {
    console.log('Zero');
  };

<!-- Angulos internos de um triângulo -->

let anguloA = 47;
let anguloB = 83;
let anguloC = 22;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } 
    else {
    console.log(false);
  };
} 
    else {
  console.log('Erro: ângulo inválido');
}

<!-- Movimento de peça de xadrez -->

const peçaDeXadrez = 'rainha';

switch (peçaDeXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei: anda apenas uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo: anda na diagonal.');
    break;
  case 'rainha':
    console.log('Rainha: anda na diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo: anda em "L", pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre: anda na horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão: anda apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

<!-- Conversão de nota em porcetagem para alfabeto -->
const nota = 93;

if (nota < 0 || nota >= 100) {
    console.log("Erro: Nota inválida.")
;}
    else if(nota >= 90) {
    console.log("A");
}
    else if(nota >= 80) {
    console.log("B");
}
    else if(nota >= 70) {
    console.log("C");
}
    else if(nota >= 60) {
    console.log("D");
}
    else if(nota >= 50) {
    console.log("E");
}
else {
    console.log("F");
}

<!-- O número é par? -->
const num1 = 3;
const num2 = 64;
const num3 = 28;
let numeroPar = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    numeroPar = true
};
    console.log(numeroPar);

<!-- O número é ímpar? -->
const num4 = 47;
const num5 = 91;
const num6 = 56;
let numeroImpar = false;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
    numeroImpar = true;
};
    console.log(numeroImpar);

<!-- Lucro -->
const custoProduto = 27;
const valorVenda = 58;

if (custoProduto >= 0 && valorVenda >= 0) {
    const custoTotalProduto = custoProduto * 1.2;
    const lucroTotal = (valorVenda - custoTotalProduto) * 1000;
    console.log(lucroTotal);
  } else {
    console.log("Inválido, os valores não podem ser negativos.");
  }

<!-- Descontos INSS e IR -->

let aliquotaINSS;
let aliquotaIR;

const salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} 
    else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} 
    else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} 
else {
  aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} 
    else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} 
    else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} 
    else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} 
else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}
console.log("Salário: " + (salarioBase - aliquotaIR));