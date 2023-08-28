const number = [1, 2, 3, 4];
console.log(Array.prototype);
Array.prototype.log = function () {
  console.log(this.join("|"));
};
number.log();
const names = ["segufa", "salvi", "tanvir", "mamun"];
names.log();

Array.prototype.loop = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
names.loop((v) => {
  console.log(`my name is ${v}`);
});

number.loop((v) => {
  console.log(`v=${v}-v*2 ${v * 2}`);
});
