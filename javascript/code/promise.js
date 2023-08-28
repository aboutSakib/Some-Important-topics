function createPromise(id) {
  const randTime = Math.floor(Math.random() * 10 + 20);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`processing ${id}-Time ${randTime}`);
      resolve(id);
    }, randTime);
  });
}
const ids = [1, 2, 3, 4, 5];
// ids.forEach((v) => {
//   createPromise(v);
// });

const result = ids.reduce((acc, cur) => {
  return acc.then(() => {
    return createPromise(cur);
  });
}, Promise.resolve());
result.then(() => {
  console.log("done!!!");
});
