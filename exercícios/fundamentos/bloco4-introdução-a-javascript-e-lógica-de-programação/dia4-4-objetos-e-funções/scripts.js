<!-- Parte 1-->
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

for (let person in info){
    console.log('Bem-vinda ' + info.personagem + '.')
}

info['recorrente'] = 'Sim';

console.log(info)

for (let key in info) {
    console.log(key);
}

for (let value in info) {
    console.log(info[value])
}

let infoDois = {
    personagem: 'Tio Patinhas', 
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178', 
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for (let value in info) {
    if (
        value === 'recorrente' &&
        info[value] === 'Sim' &&
        infoDois[value] === 'Sim'
      ) {
        console.log('Ambos recorrentes.');
      } else {
        console.log(info[value] + ' e ' + infoDois[value]);
      }
    }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' é ' + leitor.livrosFavoritos[0].titulo + '.')

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}) 

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')

<!-- Parte 2 -->
function verificaPalindromo(string) {
    let reverso = string.split('').reverse().join('');
    if (reverso === string) {
      return true;
    } else {
      return false;
    }
  }
  
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

function indiceMenorValor (numeros) {
    let maiorIndice = 0;
    for (let indice in numeros) {
        if (numeros[maiorIndice] < numeros[indice]) {
          maiorIndice = indice;
        }
      }
return maiorIndice;
}
    
console.log(indiceMenorValor([2, 3, 6, 7, 10, 1]))

function indiceMenorValor (numeros) {
    let menorIndice = 0;
    for (let indice in numeros) {
        if (numeros[menorIndice] > numeros[indice]) {
          menorIndice = indice;
        }
      }
return menorIndice;
}
    
console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]))

function retornaMaiorNome(nomes) {
    let maiorNome = nomes[0];
    for (let maisLetras in nomes) {
        if (maiorNome.length < nomes[maisLetras].length) {
            maiorNome = nomes[maisLetras];
        }
    }
return maiorNome;
}
    
console.log(retornaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

function repeteMais (inteiros) {
    let maisRepetido = 0;
    let numeros = 0;
    let indiceNumeroRepetido = 0;
    for (let indice in inteiros) {
      let indiceNumero = inteiros[indice];
      for (let indice2 in inteiros) {
        if (indiceNumero === inteiros[indice2]) {
          numeros += 1;
        }
      }
      if (numeros > maisRepetido) {
        maisRepetido = numeros;
        indiceNumeroRepetido = indice;
      }
      numeros = 0;
    }
return inteiros[indiceNumeroRepetido];
}
    
console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]))

function somaNumeros (naturais) {
    let adicaoNumeros = 0;
    for (let index = 1; index <= naturais; index += 1) {
      adicaoNumeros = adicaoNumeros + index;
    }
    return adicaoNumeros;
}

console.log(somaNumeros(5))

function verificarFinal (palavra, finalPalavra) {
    palavra = palavra.split('');
    finalPalavra = finalPalavra.split('');
    temNoFinal = true;
    for (let index = 0; index < finalPalavra.length; index += 1) {
      if (palavra[palavra.length - finalPalavra.length + index] != finalPalavra[index]) {
        temNoFinal = false;
      }
    }
return temNoFinal;
}

console.log(verificarFinal('trybe', 'be'));
console.log(verificarFinal('joaofernando', 'fernan'))