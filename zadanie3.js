// когда на конце 1, то компьютер (исключение для 11)
// когда на конце 2-4, то компьютера (исключение для 12-14)
// когда на конце 5-0, то компьютеров (включая 15-19)

const dataIs = 11;
const data1 = 1;
const data2 = 2;
const data3 = 5;
const data4 = Math.trunc(Math.random() * 100 + 1);

const computersDisplay = function (amount) {
  // обрабатываем исключения
  if (amount === 11 || amount === 12 || amount === 13 || amount === 14)
    return `${amount} компьютеров`;
  // проверяем на какую цифру кончается число
  const check = Number(amount.toString().slice(-1));
  // в зависимости от этого строим строку
  if (check === 1) return `${amount} компьютер`;
  if (check === 2 || check === 3 || check === 4) return `${amount} компьютера`;
  if (
    check === 5 ||
    check === 6 ||
    check === 7 ||
    check === 8 ||
    check === 9 ||
    check === 0
  )
    return `${amount} компьютеров`;
};
console.log(computersDisplay(dataIs));
console.log(computersDisplay(data1));
console.log(computersDisplay(data2));
console.log(computersDisplay(data3));
console.log(computersDisplay(data4));
