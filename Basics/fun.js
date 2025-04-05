function Saymyname(){
    console.log("Iqra");
    
}
Saymyname();

//add 2 numbers
function Addtwono(no1,no2){

console.log("The sum of two numbers are");
sum=no1+no2;
console.log(sum);


}
Addtwono(3,9)
////////////
function addtwonum(num1,num2){
    console.log(num1+num2)
}
const result=addtwonum(9,10)
console.log(result);
///////////////
function add2num(nom1,nom2){
    let resultt=nom1+nom2;
    return resultt;
}
const resultt=add2num(23,33);
console.log(resultt)
//////
function Checkuser(username){
    return `${username} just logged in`
}
console.log(Checkuser("Iqra"));
///2nd way 
function checkuser(username) {
    if(!username){
        console.log("plz enter a valid username");
        
    }
    return `${username} just logged in`
}
console.log(checkuser("hamna"))
