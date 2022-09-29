function randomIntFromInterval(min, max) {
  // Результат: целое число из диапазона "от...до"
  // min и max включены в диапазон

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min >= max) {
    return randomIntFromInterval(max, min);
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloatFromInterval(min, max, precision) {
  // Результат: число с плавающей точкой из диапазона "от...до"
  //с указанным "количеством знаков после запятой"

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min >= max) {
    return randomIntFromInterval(max, min, precision);
  }

  return +(Math.random() * (max - min) + min).toFixed(precision);
}

randomIntFromInterval(1, 2);
randomFloatFromInterval(1.1, 1.3, 2);
