const testData1 = 27;
const testData2 = 27.8;
const testData3 = 41.7;

const roundToFive = function (number) {
  remOfNum = number % 5;
  if (remOfNum >= 2.5) return Math.trunc(number + remOfNum);
  if (remOfNum <= 2.5) return Math.trunc(number - remOfNum);
};

console.log(roundToFive(testData1));
console.log(roundToFive(testData2));
console.log(roundToFive(testData3));
