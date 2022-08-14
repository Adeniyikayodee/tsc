"use strict";
let sales = 123456789;
let courses = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
// to use empty array, state type.
let numbers = [];
// tuples; fixed lenght array and each element has a particular type.
let user = [1, "Mosh"];
// enums; 
const small = 1;
const medium = 2;
let mySize = 3 /* Size.Large */;
console.log(mySize);
// enums using PascalCase without const
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 1] = "Small";
    Size1[Size1["Medium"] = 2] = "Medium";
    Size1[Size1["Large"] = 3] = "Large";
})(Size1 || (Size1 = {})); // you can set values or not here. 
let mySize1 = 3 /* Size.Large */;
console.log(mySize1);
//functions; properly annotate func. ? makes the variable an option 
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 50000) // if taxYear is not supplied , 2022 is used.
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
console.log(calculateTax);
//# sourceMappingURL=index.js.map