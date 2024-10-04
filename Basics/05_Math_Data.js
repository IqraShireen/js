//***********MATHS****************** */
  
console.log(Math)
console.log(Math.abs(-3));//-->absolute (-)kon plus kr deta
console.log(Math.round(7.78));//-->roundof kr deta
console.log(Math.ceil(3.1));
console.log(Math.ceil(0.1));
 console.log(Math.floor(13.7))
console.log(Math.sqrt(4));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor (Math.random() * (max - min + 1)) + min);//-->imp
console.log(Math.floor (Math.random() * (max - min + 1)) + min);

//*********DATE************* */
let mydate=new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toUTCString());
