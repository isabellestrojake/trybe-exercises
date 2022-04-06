const hour = 17;
message = "";

if (hour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
}
else if (hour >= 18 && hour < 20) {
  message = "Rango da noite, vamos jantar :D";
}
else if (hour >= 14 && hour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
}
else if (hour >= 11 && hour < 14) {
  message = "Hora do almoço!!!";
}
else if (hour >= 4 && hour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}
else {
  message = "Você está dormindo?";
}

console.log(message);

const weekDay = "domingo";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
  console.log("FINALMENTE, descanso merecido UwU");
}