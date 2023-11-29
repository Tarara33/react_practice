const arry = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < arry.length; i ++) {
  const val = arry[i] * 2

  if(val > 50) {
    newArry.push(arry[i] * 2);
  }

};

console.log(newArry)

// const mapArry = arry.map(val => val * 3);
// console.log(mapArry)
// const filterArry = mapArry.filter(val => val > 50);
// console.log(filterArry)

const mapArry = arry.map(val => val * 3).filter(val => val > 50);
console.log(mapArry)