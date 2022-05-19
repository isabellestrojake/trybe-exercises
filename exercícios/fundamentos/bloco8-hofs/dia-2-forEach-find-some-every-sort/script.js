const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Autor nascido em 1947
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());

// Livro de menor nome

function smallerName() {
  let nameBook;

books.forEach((book => {
  if (!nameBook || book.name.length < nameBook.length)
  nameBook = book.name;
}));

  return nameBook;
}
console.log(smallerName());

// Livro cujo nome tem 26 letras

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());


// Data de lançamento em ordem decrescente

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc());

// ? nasceu no século XX

function everyoneWasBornOnSecXX() {
  return books.every((book) => {
    book.author.birthYear > 1900 && book.author.birthYear <= 2000;
  });
}
console.log(everyoneWasBornOnSecXX());

// ? livro lançado na década de 80

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1800 && book.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());

// ? autores nasceram no mesmo ano

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());