import "core-js";

const obj = {
  arr: [1, 2, 3, 4],
  printArr() {
    console.log(...this.arr);
  },
};

obj.printArr();
