// на вход подается число
// нужно вывести в консоль таблицу умножения

const multTable = (n) => {
  // создаем массив из чисел до n включительно (потому n+1)
  let a = Array.from({ length: n + 1 }, (_, i) => i);
  // выводим в консоль таблицу
  console.table(a.map((k) => a.map((c) => c * k)));
};

multTable(9);
