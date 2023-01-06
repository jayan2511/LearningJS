// Expressions in javascript always resolve to a value

// we can use let to declare a variable
let remember = "September 21";

// If we declare a variable without assigning a value to it, it will automatically store an undefined value
let bankruptcy;

let myDeclaredVariable;
myDeclaredVariable = "value";



// const declares a constant, which is a value which cannot be changed. You cannot just declare a constant, you have to assign it a value
const myConstant = 200;

let answerToLife = ((4+1)*2*4)+2;


// In this case, the value of variable busta will not change to guy because it will point to the value of what scrub was pointing to at the time of assigning
let scrub = "fly";
let busta = scrub;
scrub = "guy";

// The difference between a statement and an expression is that an expression is asking javascript for a value while a statement tells javascript to do something for eg assigning/declaring a variable is a statement.
