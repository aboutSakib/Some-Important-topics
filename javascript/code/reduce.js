const numbers = [1, 2, 3, 4, 5, ];

function sumFuc(accumulator, currentValue, index) {
  console.log(`index ${index} -Acc ${currentValue} - Cur ${index}`);
  return accumulator + currentValue;
}
const sum = numbers.reduce(sumFuc,0);
console.log(sum);

// const avg = numbers.reduce((a, b, index, arr) => {
//   a += b;
//   if (index == arr.length - 1) {
//     return a / arr.length;
//   }
//   return a;
// });
// console.log(avg);
