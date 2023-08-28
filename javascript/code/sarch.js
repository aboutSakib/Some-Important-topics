const numbers = [1, 2, 3, 4, 5, 6, 7, 9];
const leniarSarch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
};
const s1 = leniarSarch(numbers, 9);
console.log(s1);

const names = [
  { id: 1, name: "sakib", contac: "+200001420", Email: "sakib520@gmail.com" },
  { id: 9, name: "Ahsan", contac: "+200001420", Email: "ahasan125@gamil.com" },
  { id: 3, name: "khaled", contac: "+200001420", Email: "khaled47@gamil.com" },
  { id: 6, name: "Sujon", contac: "+200001420", Email: "sujon12@gmail.com" },
  { id: 5, name: "Roy", contac: "+200001420", Email: "roy78@gamil.com" },
  { id: 10, name: "hamza", contac: "+200001420", Email: "hamza47@gmail.com" },
  { id: 8, name: "amir", contac: "+200001420", Email: "amir7484@gmail.com" },
  { id: 2, name: "Rahman", contac: "+200001420", Email: "rahman45@gamil.com" },
  { id: 7, name: "Yamin", contac: "+200001420", Email: "yamin7584@gamil.com" },
];
const leniarSarch1 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return 'nai re vai';
};
const s2 = leniarSarch1(names, (item) => item.id == 4);
console.log(s2);
