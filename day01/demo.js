function shuffle(arr) {
  let length = arr.length
  let r = length
  let rand = 0
  while(r) {
    rand = Math.floor(Math.random() * r--);

    [arr[r], arr[rand]] = [arr[rand], arr[r]]
  }
  return arr
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))