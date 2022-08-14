let sales = 123_456_789;
let courses = 'TypeScript';
let is_published = true;
let level;

function render(document:string) {
    console.log(document)
}

// to use empty array, state type.
let numbers: number[] = [];

// tuples; fixed lenght array and each element has a particular type.
let user: [number, string] = [1, "Mosh"];

// enums; 
const small = 1;
const medium = 2;

// enums using PascalCase
const enum Size { Small = 1, Medium, Large } // you can set values or not here. 
let mySize: Size = Size.Large;
console.log(mySize);

// enums using PascalCase without const
enum Size1 { Small = 1, Medium, Large } // you can set values or not here. 
let mySize1: Size = Size.Large;
console.log(mySize1);


//functions; properly annotate func. ? makes the variable an option 
function calculateTax(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 50_000) // if taxYear is not supplied , 2022 is used.
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);
console.log(calculateTax);