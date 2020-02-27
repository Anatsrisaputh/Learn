// ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

// 1.1   array1 = [1, 2, 30, 400]
//       array2 [2, 4, 60, 800]

// 1.2   array1 = [1, 2, 3, 4]
//       array2 ["1", "2", "3", "4"]

// 1.3   array1 = [1, "1", 2, {}] 
//       array2 ["number", "string", "number", "object"]

// 1.4   array1 = ["apple", "banana", "orange"]
//       array2 ["APPLE", "BANANA", "ORANGE"]

// 1.1
let array1 = [1, 2, 30, 400]
let result = array1.map(function(item) {
    return item * 2;
})
alert(result)

1.2
let array1 = [1, 2, 3, 4]
let result = array1.map(function(item) {
    return item.toString()
})
console.log(result)

1.3
let array1 = [1, "1", 2, {}]
let result = array1.map(function(item) {
    return (typeof item);
})
console.log(result)

1.4
let array1 = ["apple", "banana", "orange"]
let result = array1.map(function(item) {
    return item.toUpperCase();
})
console.log(result)