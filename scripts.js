/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

const num1 = Number(prompt("Digite um número:"));
const num2 = Number(prompt("Digite outro número:"));
const sum = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const rest = num1 % num2;
const isSumEven = sum % 2 === 0;
const isNumbersEquals = num1 === num2;

alert(
  `A soma dos dois números é: ${sum} \n A subtração dos dois números é: ${sub} \n A multiplicação dos dois números é: ${mult} \n A divisão dos dois números é: ${div} \n O resto da divisão dos dois números é: ${rest} \n A soma dos dois números é par? ${isSumEven} \n Os dois números são iguais? ${isNumbersEquals}`
);
