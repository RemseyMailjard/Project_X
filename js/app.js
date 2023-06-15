// Goal: Understand working with Web storage
// Localstorage & sessionstorage

//Clearing the localStorage
localStorage.clear();

//Storing the firstname in the key firstname
localStorage.setItem("firstname", "Remsey");
localStorage.lastname = "Mailjard";
localStorage.removeItem("firstname");

//Two methods to retrieve item from localStorage
let firstname = localStorage.getItem("firstname");
// Another method to grab the item from localStorage
let lastname = localStorage.lastname;
console.log(lastname);

// Work with objects in LocalStorage
const person = {
  firstname: "Remsey",
  lastname: "Mailjard",
};

//Convert object to JSON string
const personString = JSON.stringify(person);

//Store the JSON person string in LocalStorage
localStorage.setItem("teacher", personString);

//Retrieve the JSON string from localStorage
const storedPersonInString = localStorage.getItem("teacher");

//Parse or convert the JSON string back to an object
const storedPersonJSON = JSON.parse(storedPersonInString);

console.log(storedPersonJSON.firstname);

//What are usecases / examples for LocalStorage
// Shoppingcart items
// Settings or preferences Browser setting Language - User preferences , backgroundcolor

