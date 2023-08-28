const MAX_SIZE = 30;
class stack {
  constructor() {
    this.list = new Array(MAX_SIZE);
    this.top = -1;
  }
  push(item) {
    if (this.top >= MAX_SIZE) {
      console.log("stack overflow");
      return false;
    }
    this.list[++ this.top] = item;
    return true;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("stack underflow");
      return false;
    }
    let item = this.list[this.top];
    delete this.list[this.top];
    this.top--;
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("stack underflow");
      return false;
    }
    return this.list(this.top);
  }
  isEmpty() {
    return this.isEmpty < 0;
  }
}
module.exports = stack;
