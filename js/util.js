

const isNumberInRange = (number, min, max) => (min <= number && number <= max);

function getRandomPositiveInteger(a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, precision = 1) {

  if (a < 0 || b < 0 || precision < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(precision);
}

const getRandomArray = (arr) => arr.slice(getRandomPositiveInteger(0, arr.length / 2),
  getRandomPositiveInteger(arr.length / 2 + 1, arr.length - 1));

export { getRandomPositiveFloat, getRandomPositiveInteger, getRandomArray, isNumberInRange };
