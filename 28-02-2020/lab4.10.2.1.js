// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()

// // 2.1  array1 = [1, 2, 30, 400] 
// //      array2 [30, 400] // filter เลขที่มากกว่า 10

let array1 = [1, 2, 30, 400]
let array2 = array1.filter(function (item) {
    return item > 10;
})
console.log(array2)

// 2.2  array1 = [1, 2, 3, 4]
//      array2 [1, 3] // filter เลขคี่

let array1 = [1, 2, 3, 4]
let array2 = array1.filter(function (item) {
    return item % 2 !== 0;
})
console.log(array2)

// 2.3  array1 = [1, "1", 2, {}] 
//      array2 [1, 2] // filter Number

let array1 = [1, "1", 2, {}]
let array2 = array1.filter(function (item) {
    return typeof (item) === "number"
})
console.log(array2)

// 2.4  array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
//      array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6

let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
let array2 = array1.filter(function (item) {
    return item(lenght) > 6
})
console.log(array2)

// 2.5 array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
//   array2 [
//     { name: "apple", age: 14 },
//     { name: "pineapple", age: 16 },
//   ] // filter age < 18

let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
let array2 = array1.filter(function () {
    return item.age < 18;
})
console.log(array2)

// 2.6 array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
//   array2 [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ] // filter ไม่เอาคนที่อายุ 32
l
et array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
let array2 = array1.filter(function () {
    return item.age !== 32;
})
console.log(array2)



2.9
array1 = [1, -3, 2, 8, -4, 5]
array2[1, 2, 8, 5] // filter เลขบวก

let array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.filter(function () {
    return item > 0;
})
console.log(array2)

2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว

let array1 = ["APPLE", "appLE", "PEACH", "PEach"]
let array2 = array1.filter(function () {
    return item.toUpperCase();
})
console.log(array2)


2.11 array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
array2[
    { name: "banana", birth: "1990-10-10" },
    { name: "peach", birth: "2002-10-13" },
  ] // filter คนเกิดเดือน 10

let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
let array2 = array1.filter(function () {
    let array3 = item.birth.split("-");
    return array3[1] == 10;
    //return item.birth.slice(5,7) == "10";
})
console.log(array2)

