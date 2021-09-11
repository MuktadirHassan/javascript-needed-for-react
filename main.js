// map () method creates a new Array.
// () => 'tamim'
// () => {
//     return 'tamim'
// }
// const arr = [2, 4, 8];
// // Map implementation
// const newArr = arr.map((item) => item * 2);
// const forEachArr = arr.forEach((item) => item * 2);

// console.log(newArr);
// for loop implementation
// function myMap(arr) {
//   const doubleArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     doubleArr.push(element * 2);
//   }
//   return doubleArr;
// }

// Find
// const arr = [1, 3, 5, 4, 8];
// // Always returns the FIRST matching result
// const result = arr.find((element) => element > 4);
// console.log(result); // 5

// Filter
// একটা এরের মধ্যে কন্ডীশন ম্যাচ করলে সব গুলো ডেটা এরের মধ্যে রিটার্ন দিবে।
// Always returns an Array
// const arr = [1, 3, 5, 4, 8];
// const oddNumber = arr.filter((item) => item > 4);
// console.log(oddNumber);

// Reduce
// const arr = [1, 3, 5, 4, 8];
// const sum = arr.reduce((previousValue, item) => previousValue + item, 10);

// // let sum = 10;
// // for (let i = 0; i < arr.length; i++) {
// //   const element = arr[i];
// //   sum = sum + element;
// // }
// console.log(sum);

// Falsy values
// 0, undefined, null, false, "", NaN

// const obj = {
//   name: "Tamim",
//   student: true,
//   isActive: false,
// };

// const arr = [1, 4, 5, 6, 7];
// const objArr = [{},{},{},{}]

// const newArr = [...objArr, {}]

// if (obj.name) {
//   console.log(obj.name);
// } else {
//   console.log("Is false");
// }

// obj.name === "Tami" ? console.log(obj.name) : console.log("Is false");
// ?.
// && ||

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
