// console.log will log whatever is in the parameters in the console of the browser
console.log(57)


// Using the following commands in the console will return the title, body and children of the body respectively
document.body
document.title
document.body.children


// This command will get the element by the specified id
document.getElementById("board")

// This command can be used to get elements using CSS syntax
document.querySelector(#board)

// This command will get elements using their tag names
document.getElementByTagName(h1)

// This command will get an element by class
document.getElementsByClassName("player")

// This command will get all elements with that particular class/id/tag
document.querySelectorAll(".player")

// Using .length will return the number of elemts returned by the first method
document.getElementsByClassName("player").length

// This command will return the text inside the specified element
document.getElementById("p1-name").textContent

// This will change the title of the page to MyPage
document.title = "MyPage"

// This will change the text content of the element with id "p1-name"
document.getElementById("p1-name").textContent = "Sofia"

// This will append the text to the given elements
document.getElementById("p1-name").append(" & friends")