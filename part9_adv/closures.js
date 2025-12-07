function number () {
    let num = 5
    return function () {
        num++
        return num
    }
}

let answer = number()

console.log(answer())
console.log(answer())
console.log(answer())