// 1.5 array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
//   array2 ["apple", "banana", "watermelon"]

1.5
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let array2 = array1.map(function (item) {
    return item.name;
})
console.log(array2)

// 1.6 array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ]
//   array2 [14, 18, 32]   
//*************************************************************************** */
1.6
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let array2 = array1.map(function (item) {
    return item.age;
})
console.log(array2)
//*************************************************************************** */
1.7
let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]
//array2["apple London", "banana Bangkok", "watermelon Singapore"]
let array2 = array1.map(function (item) {
    return item.name + " " + item.surname;
})
console.log(array2)

//*************************************************************************** */

1.8
// 1.8 array1 = [1,3,4,5,6,7,8]
//     array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
let array1 = [1, 3, 4, 5, 6, 7, 8]
let array2 = array1.map(function (item) {
    if (item % 2 == 0)
        return "even";
    else return "odd";

})
console.log(array2)

1.9 
// array1 = [1, -3, 2, 8, -4, 5]
//     array2 [1, 3, 2, 8, 4, 5]

let array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map(function (item) {
    return Math.abs(item)
})
console.log(array2)

//*************************************************************************** */

// 1.10 array1 = [100, 200.25, 300.84, 400.3]
//      array2 ["100.00", "200.25", "300.84", "400.30"]

let array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(function (item) {
    return String(item.toFixed(2));
})
console.log(array2)

//*************************************************************************** */

// 1.11
// 2.11 array1 = [
//     { name: "apple", birth: "2001-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//     { name: "peach", birth: "2002-10-13" },
//   ]
//   array2 [
//     { name: "banana", birth: "1990-10-10" },
//       { name: "peach", birth: "2002-10-13" },
//   ] // filter คนเกิดเดือน 10


let array1 = [
        { name: "apple", birth: "2001-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
        { name: "peach", birth: "2002-10-13" },
      ]
      let array2 = array1.map(function (item) {









