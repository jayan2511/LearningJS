// Arrays keep multiple values in a single collection
let synonyms = ["plethora", "array", "cornucopia"];

// This will give us number of values in the array synonyms
synonyms.length;

// This will tell us the second value in the array synonyms
synonyms[1];

// This will give us the index of plethora in the array synonyms
synonyms.indexOf("plethora")

// We can use .includes to check if an array includes a particular value
synonyms.includes("plethora")
synonyms.includes("variety")


// Arrays are mutable unlike strings, so we can modift arrays


// This will replace the value at index 1 with variety
synonyms[1] = "variety";

// This will take the last item of the array 'synonyms', assign it to the variable lastItem and remove it from the array.
let lastItem = synonyms.pop()

// This will append a value to the end of an array
synonyms.push("multitude")

// Arrays can be empty, hold a single item, or hold multiple items
let emptyArray = [];
let oneItemArray = ["lonely"];

// Arrays can hold any type of items or a mix of data types
let mixedArray = ["hello", 6, true, null, document]


// .sort() will convert all values of an array to strings and then sort them alphabetically
["c","a","d","b"].sort()

// .join() will join the values in the array with the specified parameters
["lions", "tigers", "bears"].join("&")

// .concat() will concatenate 2 arrays
[1,2,3].concat([4,5,6])



// If we use const with a mutable data type, javascript will allow us to modify the contents of that data type, however it wont let us point to another data altogether. For eg if we assign a constant value to an array and then change the value of at index 1 of the array, the constant will keep pointing to THAT particular array even though the values inside the array have changed.
const operand = [4,6];
const sum = operands[0]+operands[1]
operands[0] = 5
sum