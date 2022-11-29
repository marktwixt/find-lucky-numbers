// Write your code below this line.
function luckyNumbers (n) {
    let numArr = [1,2,3,4,5,6,7,8,9,10]
    let luckyNumbers = []
    for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * numArr.length);
        luckyNumbers.push(numArr[x])
        numArr.splice(x, 1)
    }
    return luckyNumbers
}
 console.log(luckyNumbers(3))