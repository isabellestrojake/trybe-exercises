/*const employGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(employGenerator));*/

/*const verificaNumero = (meuNumero, numero) => meuNumero === numero;

const resultadoLoteria = (meuNumero, callback) => {
  const numero = Math.floor((Math.random() * 5) + 1);

  return callback(meuNumero, numero) ? 'Dia de sorte, você ganhou!' : 'Não foi dessa vez...';
}
console.log(resultadoLoteria(5, verificaNumero));*/

/*const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  }
  if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const pontos = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado Final: ${contador} pontos.`
}
console.log(pontos(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));*/

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtk = (dragon) => {
  const danoMin = 15;
  const danoDrg = Math.floor((Math.random() * (dragon.strength - danoMin + 1) + danoMin));

  return danoDrg;
}

const warriorAtk = (warrior) => {
  const danoMin = warrior.strength;
  const danoMax = danoMin * warrior.weaponDmg;
  const danoWarrior = Math.floor((Math.random() * (danoMax - danoMin + 1) + danoMin));

  return danoWarrior;
}

const mageElemAtk = (mage) => {
  const mana = mage.mana;
  const danoMgMin = mage.intelligence;
  const danoMgMax = danoMgMin * 2;
  const statusTurno = {
    manaGasta: 0,
    danoDesferido: 'Mana insuficiente...',
  };

  if (mana > 15) {
    const mageMgDmg = Math.floor((Math.random() * (danoMgMax - danoMgMin + 1) + danoMgMin));
    statusTurno.manaGasta = 15;
    statusTurno.danoDesferido = mageMgDmg;
    return statusTurno;
  }
  return statusTurno;
}

const gameActions = {
  turnoWarrior: (warriorAtk) => {
    const warriorDmg = warriorAtk(warrior);
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },

  turnoMago: (mageElemAtk) => {
    const inicioTurnoMago = mageElemAtk(mage);
    const mageDmg = inicioTurnoMago.danoDesferido;
    mage.damage = mageDmg;
    mage.mana -= inicioTurnoMago.manaGasta;
    dragon.healthPoints -= mageDmg;
  },

  turnoDragao: (dragonAtk) => {
    const dragonDmg = dragonAtk(dragon);
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },

  resultadoTurno: () => battleMembers,
};
gameActions.turnoWarrior(warriorAtk);
gameActions.turnoMago(mageElemAtk);
gameActions.turnoDragao(dragonAtk);
console.log(gameActions.resultadoTurno());
