$(document).ready(function(){
	var guess, counter = 6, random = Math.floor(100 * Math.random()); 

	$('#submit').on("click", function() {
		guess = $('#guess-value').val();
		$("#value").text(guess);
		
		counter--;
		$("#attempts").text(counter);

		alert(random);
	});
});

