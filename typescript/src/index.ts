let age:number=26
if(age<50){
    age+=50
}

let numbers:number[]=[1,2,3]

enum Size {Small=5,Medium=10,Large=15}
let mySize:Size=Size.Medium

function calculateTax(income: number):number{
    if(income<50000)   
        return income*1.2
    return income * 1.3
}
console.log(calculateTax(60000))

let employee :{name:string, age:number,city:string,cnic:number,gName?:string}= {
    name:"Adil",
    age:23,
    city:"Isb",
    cnic:0,
}
employee.cnic=1
employee.gName="Nadir"
console.log(employee)



function add(a: number, b: number, ...rest: number[]){
     return a + b + rest.reduce((p,c) => p+c, 0)
}
console.log(add(5,10,20,30))