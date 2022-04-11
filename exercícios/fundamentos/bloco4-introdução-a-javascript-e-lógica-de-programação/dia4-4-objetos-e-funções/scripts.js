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