window.addEventListener("load", function() {
	addNumbers();
});

function addNumbers(){
	var elements = document.getElementsByClassName('element');

	for (let i = 0; i < elements.length; i++){
		let num = i + 1;
		elements[i].innerHTML = num;
	}
}