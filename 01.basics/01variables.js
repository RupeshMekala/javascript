const accountId = 124433;   // why is const used?
let accountName = "Rupesh";
var email = "rupesh@dev.com";
accountCity = "Bengaluru";  // this can also be done, but is not the right way of doing it.
let accountState;


accountName = "Rupesh Mekala";
email = "rupesh@developer.com";
accountCity = "Hyderabad";

console.log(accountId);
console.table([accountId, accountName, email, accountCity, accountState]); // what is this? Something new?

/**
 prefer not to use 'var' because of block scope and functional scope
 */

