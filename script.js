//your JS code here. If required.
function incrementCount(){
	const count = document.getElementById("counter");
	const incrementBtn = document.getElementById("incrementBtn");
	let counter = 0;

	incrementBtn.addEventListener("click", function(){
		alert('previous value: ${counter}');
		counter++;
		 count.textContent = counter;
	});
}
incrementCount();
