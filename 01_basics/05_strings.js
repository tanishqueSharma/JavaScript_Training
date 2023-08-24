const name = 'taani'
const repoCount = 10
// console.log(name + repoCount+' Value');
// console.log(`Hello my name is ${name}`);

const gameName = new String("Taani-sharma");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,4) // 4 not included
// console.log(newString);
const anotherString = gameName.slice(-1,4)
// console.log(anotherString);

const newStr1 = "     taani"
// console.log(newStr1.trim());

const url = "https://taani.com/taani%20sharma"
// console.log(url.replace('%20','-'));
// console.log(url.includes('ani'));
console.log(gameName.split('-'));
