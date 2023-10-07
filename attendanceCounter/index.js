
// to run the file type on the terminal: start index.html

//installing node which is an environment created to run 
//javascript outside a browser, it is build on top of v8 which
//is the chrome engine to run javascript, so here node is installed 
//to run javascript outside the browser

// to get an element of html by its id and change its value
//document.getElementById("count").innerHTML = 6

// document.getElementByid("id") is an inbuilt 
// javascript function to get an HTML element with a particular id

let count = 0;
let countStudent = document.getElementById("count")
let periodStudent = document.getElementById("period")
let value = "PERIOD WISE : ";

console.log("printing the id accuired by JS",countStudent )

// innerHTML update the text part of the HTML element
function increment(){

    count += 1;
    countStudent.innerHTML = count;
    console.log("The increment button was clicked");
}

function clearAll(){

    count = 0;
    countStudent.innerHTML = count;
    console.log("The clear button was clicked");
}

function save(){

    value = value + count + " : ";
    periodStudent.innerHTML = value;
    console.log("The save button was clicked");

}