const myFizzBuzz = require('./fizzbuzz.js');

describe('Testa a função myFizzBuzz', () => {
  test('verifica o valor recebido para o retorno adequado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  });
});