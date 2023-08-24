const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2.length);

//methods
myArr.push(6)
myArr.push(7)
myArr.pop()
//unshift()
//shift()
//includes()
//indexOf(2)
//join
//slice:original array is not changed
//splice:original array chnge hojta h

console.log(myArr);

const heros = ["Stefan","Damon",'Hardin',"Klaus","Elijah"]
const hero = ["Jere","Conrad"]
//concat
const allHeros = heros.concat(hero)
console.log(allHeros);
//spread
const allNewHeros = [...heros,...hero]
console.log(allNewHeros);
//flat
//of
