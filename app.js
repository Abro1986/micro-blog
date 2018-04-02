const form = document.getElementById('blogForm')
let input = document.getElementById("blogInput")
let li = document.getElementsByClassName("list-group-item")
let button = document.createElement('button');
let buttonText = document.createTextNode("X")



form.addEventListener("submit", function(e){

	e.preventDefault()
	let inputValue = document.getElementById("blogInput").value
	let newElement = document.createElement('li')

		newElement.classList.add('list-group-item');
		newElement.innerHTML = inputValue
			document.getElementById('container').appendChild(newElement, inputValue , button);




});

form.addEventListener("submit", function(e) {
 	e.preventDefault()
  	input.value = " ";
});


form.addEventListener("sumbit", function(e) {
	button.appendChild(buttonText);
	document.getElementById('container').appendChild(button)
})


