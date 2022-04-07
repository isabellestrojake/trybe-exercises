console.log("Imprimir valores")
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

console.log("Soma +1")
for (let soma of numbers) {
    soma += 1;
    console.log(soma);
  }

console.log("Média aritmética")
let soma2 = 0; 
for (let index = 0; index < numbers.length; index += 1) {
    soma2 += numbers[index];
  }
  
let media = soma2/ numbers.length;
  
console.log(media);

console.log("Valor 20")
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}

resultado2 = resultado / numbers.length;

if (resultado > 20) {
  console.log('Valor maior que 20.');
} else {
  console.log('Valor menor ou igual a 20.');
}

console.log("Maior número")
let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero);

console.log("Quantos números ímpares tem?")
let resultado3 = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    resultado3 += 1;
  }
}

if (resultado3 === 0) {
  console.log('Nenhum valor ímpar encontrado!');
} else {
  console.log(resultado3);
}

console.log("Menor número")
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
      menorNumero = numbers[index];
    }
  }
  console.log(menorNumero)

  console.log("De 1 a 25")
for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

console.log("Dividindo por 2")
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

console.log("Bônus ordem crescente")
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  
  console.log(numbers);

console.log("Bônus ordem decrescente")
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  
  console.log(numbers);

console.log("Bônus 3")
let novaLista = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    novaLista.push(numbers[index] * numbers[index + 1]);
  } else {
    novaLista.push(numbers[index] * 2);
  }
}

console.log(novaLista);