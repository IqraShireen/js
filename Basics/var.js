let a=123;
a=244;
console.log(a);

let accountId=89;
var email="iqra@123";
const password="33333";
code=1111;
code=2222;
accountId=99;

email="hamna233";
let state;
console.log(email);
console.log(code);
console.log(accountId);
console.table([email,code,accountId,state]);

// *************Variables and Data ****************
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
// # console.table([group of variables you want to show in tabular form])