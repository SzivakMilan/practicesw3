let arrOfNumbers = [10, 20, 30, 40, 50, 60]

/* for (let i = 0; i < arr.length; i++) {
  let result = arr[i] * 2
  console.log(result)
} */

let newArr = []
arrOfNumbers.forEach((number) => newArr.push(number * 2))
console.log(newArr)