// *********MEMORY**********
// There are two types of memory stack and Heap
// 1.STACK (call by value)-->PRIMITIVES-->COPY JATI
// 2.HEAP -->ORIGINAL VALUE KA REFERENCE MILTA

// STACK example

let name ="IqraShireen"
let anotherName=name;
anotherName="hamna"
console.log(name)
console.log(anotherName)

//Heap example

let idOne={
    ename:"ali",
    fatherName:"hayat",
}
let idTwo=idOne;
idTwo.ename="ammar";
console.log(idOne.ename)
console.log(idTwo.ename)
