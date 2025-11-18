// console.log(typeof "Alok")
// console.log(typeof null)
// console.log(typeof undefined)

let score = "33abc"
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn = "Alok"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let someNumber = 55
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

/*
Why String to Number conversion is confusing
*/

// *****************************Operations***************************************

let value = 3
let negvalue = -value
// console.log(negvalue)
// console.log(2+2)
// console.log(5-3)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)
// console.log("1" + 3) // It return 13
// console.log(1 + "3") // It return 13
// console.log("1" + 2 + 2) // It return 122
// console.log(1 + 2 + "2") // It return 32

// console.log(+true)
// console.log(+"")
// console.log(-"")
// console.log(-true)

let gameCounter = 5
let gameCounter1 = gameCounter++
let gameCounter2 = ++gameCounter
// gameCounter++
// ++gameCounter
console.log({"gameCounter":gameCounter})
console.log({"gameCounter1":gameCounter1})
console.log({"gameCounter2":gameCounter2})