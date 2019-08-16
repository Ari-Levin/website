
	//define a function
	function sayDontPoke() {
	    alert('dont poke the fox');
	}
	
	// register the function to the onclick event
	document.querySelector('img').onclick = sayDontPoke
	
	// call when page loads
	sayDontPoke()
	
