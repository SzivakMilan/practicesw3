let var1 = 10;
let var2 = 15;

let l = 45;
let m = 98;

let str1 = "kis"
let str2 = "macska"

function multiplyThreeNumbers(x, y, z) {
  let result = x * y * z
  return result
}

function addThreeNumbers(x, y, z) {
  let result = x + y + z
  return result
}


let data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18]
]

let data2 = [
  [21, 22, 23],
  [24, 25, 26],
  [27, 28, 29],
  [31, 32, 33]
]

let data3 = [
  [101, 102, 103],
  [202, 303, 404],
  [999, 666, 333]
]

/* let sumOfNumbers = 0

for (let i = 0; i < data.length; i++) {
  let result = multiplyThreeNumbers(data[i][0], data[i][1], data[i][2])
  sumOfNumbers += result
}

console.log(sumOfNumbers)

let sumOfOtherNumbers = 0

for (let i = 0; i < data2.length; i++) {
  let result = multiplyThreeNumbers(data2[i][0], data2[i][1], data2[i][2])
  sumOfOtherNumbers += result
}

console.log(sumOfOtherNumbers) */

function computeData(dataToCompute, callBackFunction) {
  let sum = 0

  for (let i = 0; i < dataToCompute.length; i++) {
    let result = callBackFunction(dataToCompute[i][0], dataToCompute[i][1], dataToCompute[i][2])
    sum += result
  }

  return sum
}

console.log(computeData(data, addThreeNumbers))
console.log(computeData(data, multiplyThreeNumbers))

console.log(computeData(data2, addThreeNumbers))
console.log(computeData(data2, multiplyThreeNumbers))

console.log(computeData(data3, addThreeNumbers))
console.log(computeData(data3, multiplyThreeNumbers))