// We can define an object using curly braces
const js = {
    name: "Javascript",
    abbreviation: "JS",
    isAwesome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator = "Brendan Eich"
}

// We can retrieve values from an object using the dot (.) notation
js.name;
js.isAwesome;
js.birthYear;



js.name.startsWith("Java")

let age = 2023 - js.birthYear;


// We can reassign property values in objects
const indecisive = {
    lunch: "sandwich"
}
indecisive.lunch = "tacos"
indecisive.snack = "chips"


// Indexing in objects uses the key as the index and the value as the value
// This will return 'tacos'
indecisive["lunch"]



// OBJECT METHODS
// In this example, we are assigning a method speak to the object dos which is a function that prints "Woof Woof" when called
const dog = {
    name: "Ein",
    breed: "Corgi",
    speak: function(){
        console.log("Woof Woof");
    }
}

dog.speak();



// 'this' in a method ;ets us reference other properties on the object
const jayan = {
    name: "Jayan Almadi"
}

jayan.speak = function(){
    console.log("My name is ", thin.name)
}

jayan.speak();





// We can nest objects
const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner: {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};

const tiramisu = menu.lunch.dessert;





// document is a built-in object in javascript
// console is also a built-in object in javascript
console.log()
console.warn()
console.error()
console.clear();


// math is also a built-in object in javascript
let randomNumber = Math.random();
const pi = Math.PI;
const five = Math.abs(-5);

// Strings can also be interpreted as objects




// TIC TAC TOE DEMO

// Q1. Set up the players:
// 1. Create an array called players containing 2 objects, one representing each players
// 2. Each object should represent player symbol and name
// 3. Display each players name in the appropriate element in the page

let players = [
    {name: "Jayan", symbol = "X"}, {name = "Marc", symbol = "O"}
]
document.getElementById("p1-name").textContent = players[0].name;
document.getElementById("p2-name").textContent = players[1].name;





// Q2. Play!
// 1. Take turns placing symbols on the board
// 2. On each turn:
//          Retrieve the square you want to play in
//          Set the square's text to your player's symbols

squares[4].textContent = players[0].symbol;
squares[0].textContent = players[1].symbol;
//  and so on...