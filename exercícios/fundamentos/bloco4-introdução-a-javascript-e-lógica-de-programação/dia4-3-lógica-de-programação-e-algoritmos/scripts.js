<!-- Fatorial de 10 -->
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial)

<!-- Inverter a palavra -->
let palavra = 'Tryber';
let palavraInversa = "";

for (let index = 0; index < palavra.length; index += 1) {
    palavraInversa += palavra[palavra.length - 1 - index]
}
console.log(palavraInversa)

<!-- Retornar a maior ou menor palavra -->
let aprendizados = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS'];

let maiorPalavra = aprendizados[0];
let menorPalavra = aprendizados[0];

for (let index = 0; index < aprendizados.length; index+= 1) {
    if (aprendizados[index].length > maiorPalavra.length){
        maiorPalavra = aprendizados[index]
    }
}

for (let index = 0; index < aprendizados.length; index+= 1) {
    if (aprendizados[index].length < menorPalavra.length){
        menoralavra = aprendizados[index]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra)

<!-- Maior número primo entre 0 e 50 -->
let maiorNumeroPrimo = 0;
let ehPrimo;

for (let numeroUsado = 0; numeroUsado <= 50; numeroUsado += 1) {
    for (let divisorUsado = 2; divisorUsado <= numeroUsado; divisorUsado +=1) {
        if ( numeroUsado % divisorUsado === 0) {
           ehPrimo = false;
        }
        if (numeroUsado % divisorUsado > 1) {
            ehPrimo = true;
    }
    }
    if (isPrime = true){
        maiorNumeroPrimo = numeroUsado;
    }
}
console.log(maiorNumeroPrimo)