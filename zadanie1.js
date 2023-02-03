const cities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Воронеж"];

const arrayToStr = function (array) {
  return array.join(", ") + ".";
};

// можно сделать еще короче

const arrayToStrArrow = (array) => array.join(", ") + ".";

console.log(arrayToStr(cities));
console.log(arrayToStrArrow(cities));
