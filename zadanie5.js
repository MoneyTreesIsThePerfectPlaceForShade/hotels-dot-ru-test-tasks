// на вход подаются два массива
// надо найти те числа, которые повторяются как минимум в двух экземплярах
// пример: [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// вывод: [1, 17]

function findMatch(arr1, arr2) {
  // создаем результирующий массив
  let result = [];
  // клонируем массив
  let clonedArr1 = arr1.slice(0);
  for (let i = 0; i < clonedArr1.length; i++) {
    // если результат имеет в себе элемент под индексом i в arr1,
    // то запускаем новую итерацию
    if (result.includes(clonedArr1[i])) continue;
    // удаляем элемент массива
    delete clonedArr1[i];
    // если клон arr1 имеет элемент из arr1 И arr2 имеет тот же элемент
    if (clonedArr1.includes(arr1[i]) && arr2.includes(arr1[i])) {
      // то клонируем arr2
      let clonedArr2 = arr2.slice(0);
      // удаляем элемент из клона arr2
      delete clonedArr2[clonedArr2.indexOf(arr1[i])];
      // пушим в результат нужный элемент
      if (clonedArr2.includes(arr1[i])) result.push(arr1[i]);
    }
  }
  // сортируем для красоты
  return result.sort((a, b) => a - b);
}

console.log(
  findMatch(
    [7, 17, 1, 9, 1, 17, 56, 56, 23],
    [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
  )
);
