function fn(number) {
  return number * 2;
}
console.log(fn(2))

const fnArrow = number => number * 2;
console.log(fnArrow(2))

const fnObject = num => ({original: num, result: num * 2})
console.log(fnObject(2))