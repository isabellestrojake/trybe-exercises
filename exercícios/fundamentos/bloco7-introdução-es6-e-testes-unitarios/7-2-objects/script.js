const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const novaChave = (obj, key, value) => {
  obj[key] = value;
}
novaChave(lesson2, 'turno', 'noite');

const listaChave = (obj) => Object.keys(obj);
console.log(listaChave(lesson1));

const tamanhoObj = (obj) => Object.keys(obj).length;
console.log(tamanhoObj(lesson1));

const listaValores = (obj) => Object.values(obj);
console.log(listaValores(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

const quantDeAlunos = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;;
  }
  return total;
};
console.log(quantDeAlunos(allLessons));

const pegarValorPorNumero = (obj, number) => Object.values(obj)[number];
console.log(pegarValorPorNumero(lesson2, 3));

const verificarPares = (obj, key, value) => {
  const array = Object.entries(obj);
  let ehIgual = false;

  for(let index in array) {
    if(array[index][0] === key && array[index][1] === value)
    ehIgual = true;
  }
  return ehIgual;
}
console.log(verificarPares(lesson3, 'numeroEstudantes', 10));