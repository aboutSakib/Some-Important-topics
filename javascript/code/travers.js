var numbers = [2, 4, 5, 8, 10, 14, 5, 7];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
  sum+=numbers[i]
}
console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     console.log(numbers[i]);
//   }
// }
