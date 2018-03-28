const form = document.getElementById('blogForm')

form.addEventListener("submit", function(e){

	e.preventDefault()
	let inputValue = document.getElementById("blogInput").value

let newElement = document.createElement("p", inputValue + "")
newElement.innerHTML = inputValue
document.getElementById('container').appendChild(newElement, inputValue);
});



let inputValue = document.getElementById("blogInput").value
console.log(inputValue + "is");
let newElement = document.createElement("p")
newElement.innerHTML = inputValue
//.getElementById("container").appendChild(newElement.innerHTML)
//container = document.getElementById("container")
