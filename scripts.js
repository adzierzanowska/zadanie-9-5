var withButtonsClass = document.getElementsByClassName('button');

for(var i = 0; i < withButtonsClass.length; i++) {
	var buttonElement = withButtonsClass[i];
	var text = buttonElement.innerText;
	console.log(text);

	//console.log(withButtonsClass[i].innerText);
}
