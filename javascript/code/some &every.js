const productRevew = [
  { name: "sakib", response: "positive", rating: 5 },
  { name: "bro", response: "positive", rating: 4 },
  { name: "fohinni", response: "positive", rating: 9 },
  { name: "raju", response: "positive", rating: 5 },
  { name: "nasim", response: "positive", rating: 4 },
  { name: "sorif", response: "positive", rating: 4 },
  { name: "asad", response: "positive", rating: 5 },
  { name: "yamin", response: "positive", rating: 4 },
];
const revew = productRevew.every((value) => value.rating > 3);
if (revew) {
  console.log("positive revew 100%");
} else {
  console.log("some customar negative response");
}

const runs = [
  { name: "sakib", runs: 500 },
  { name: "mustafizur rahman", runs: 100 },
  { name: "babr azam", runs: 100 },
  { name: "malik", runs: 100 },
  { name: "sakib al hasan", runs: 100 },
];
const testRun = runs.some((value, ) => value.runs > 400);
console.log(testRun);
