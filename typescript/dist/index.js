"use strict";
let age = 26;
if (age < 50) {
    age += 50;
}
let numbers = [1, 2, 3];
var Size;
(function (Size) {
    Size[Size["Small"] = 5] = "Small";
    Size[Size["Medium"] = 10] = "Medium";
    Size[Size["Large"] = 15] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(60000));
let employee = {
    name: "Adil",
    age: 23,
    city: "Isb",
    cnic: 0,
};
employee.cnic = 1;
employee.gName = "Nadir";
console.log(employee);
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add(5, 10, 20, 30));
//# sourceMappingURL=index.js.map