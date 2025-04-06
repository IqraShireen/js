//Rest operator
function Additemstocart(...items){
return items;
}
console.log(Additemstocart(233,44,555,888));
//use objects in function
let object={
    name:"Iqra Shireen",
    id:"999a",
    roll_no:78,
}
function Useobjdata(anyobj){
return `The name is ${anyobj.name} and id is ${anyobj.id}`
}
console.log(Useobjdata(object));
//////////////
let Anyobject={
username:"Hamna Shireen",
id:90,
rollno:22,

}
function useobj(randomobj){
    return `The username is ${randomobj.username} and id is ${randomobj.id}`
}
console.log(useobj(Anyobject));
///3rd way
function Usageofobj(anyyobj){
    console.log(`The friend name is ${anyyobj.friendname} and her marks are ${anyyobj.marks}`);
    
}
Usageofobj(
    {
        friendname:"Mehak",
        marks:77,
    }
)
//////now pass arrays
let anarray=[23,33,44,88,99];
function getthirdvalue(anyarray){
    return anyarray[2]
}
console.log(getthirdvalue(anarray));
///////
function getfirstvalue(anyyarray){
    return anyyarray[0]
}
console.log(getfirstvalue([100,200,300]));


