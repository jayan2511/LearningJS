// Data types in Javascript:
// Strings
// Number
// BigInt
// Boolean
// Undefined
// Null
// Symbol
// Object

// Objects can be 
// An object
// An array
// A date






// Typeof will give you the type of an element
typeof (42)


// Undefined values in JS are mostly accidental null return values, however null values are generally deliberate null value returns


// when .length is used with strings, it returns the number of characters in the string
"super".length

// Indexing works in the same way in JS as python

// S   U   P   E   R
// 0   1   2   3   4


"ALOHA"[0]
// This will return A
"ALOHA"[2]
// This will return O


// To get the index of a specific string, we can use indexOf
"aloha".indexOf("l")
//This will return 0 as indexOf will return the first item it finds
"aloha".indexOf("a")
// In case you ask JS for a character that is not present in a string, it will return -1
"aloha".indexOf("q")
// If you ask for the index of a substring longer than one character, it will return the index where the substring begins
"aloha".indexOf("ha")



// .includes will tell you if one string includes another string or not
// This will return True
"aloha".includes("ha")




// .startsWith will tell you if a string starts with a particular specified string value
"aloha".startsWith("al")


// You can concatenate strings using a plus (+) sign
"aloha" + "!"

// "This will convert the whole string to upper case/lower case
"aloha".toUpperCase()
"ALOHA".toLowerCase()
