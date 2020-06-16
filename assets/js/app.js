window.addEventListener("load", function() {
	addNumbers();
});

function addNumbers(){
	var elements = document.getElementsByClassName('element--one');

	for (let i = 0; i < elements.length; i++){
		let num = i + 1;
		elements[i].innerHTML = num;
	}

	var elementsTwo = document.getElementsByClassName('element--two');

	for (let i = 0; i < elementsTwo.length; i++){
		let num = i + 72;
		elementsTwo[i].innerHTML = num;
	}
}