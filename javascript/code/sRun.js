var stack = require("./stack");
var stack = new stack();
const text = "hello";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i));
}
let reversedText = "";
while (!stack.isEmpty()) {
  reversedText += stack.pop();
}
console.log(reversedText);
