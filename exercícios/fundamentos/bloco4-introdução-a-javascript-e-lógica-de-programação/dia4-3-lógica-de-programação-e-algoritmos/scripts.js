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