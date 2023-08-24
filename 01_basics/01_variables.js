const accountId = 144553
let accountEmail = "taani@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);
accountEmail = "Taani@gmail.com"
accountPassword = "21212"
accountCity = "Bhopal"
console.table([accountId,accountEmail,accountPassword,accountCity]);
/*
Prefer not to use var
bcz of issue in block and functional scope
*/
console.log(accountState);