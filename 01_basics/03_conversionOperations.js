let score = '33abs'
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true; 0=>false
// ""=>false
//"taani"=>true
let someNum = 33
let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof stringNum);
