const data1 = 1;
const data2 = 2;
const data3 = 3;
const data4 = 4;
const data5 = 5;
const data6 = 21;
const data7 = Math.trunc(Math.random() * 100 + 1);

function primeOrNot(number) {
  if (number === 1) return "Число должно быть больше 1";
  let count = 0;
  // пройдемся по каждому числу до числа number
  for (let i = 2; i <= number - 1; i++) {
    // проверяем, есть ли остаток от деления
    const divideNum = number % i;

    // если остатка нет (равен нулю) (т.к. мы не берем в расчет 1 и само число
    // то получаем, если каунтер = 0, то число делится только на 1 и на само себя
    // без остатка)
    if (divideNum === 0) {
      // то увеличиваем переменную счетчика
      count++;
    }
  }

  // если каунтер не увеличился, значит число делится только на 1 и на себя без остатка
  if (count === 0) {
    return `${number} - простое число`;
  } else {
    return `${number} - составное число`;
  }
}

console.log(primeOrNot(data1));
console.log(primeOrNot(data2));
console.log(primeOrNot(data3));
console.log(primeOrNot(data4));
console.log(primeOrNot(data5));
console.log(primeOrNot(data6));
console.log(primeOrNot(data7));
