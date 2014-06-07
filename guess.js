$(document).ready(function(){
	var guessText, guessNum, counter = 5, random = Math.floor(100 * Math.random()); 

	// print answer on the page for reference 
	$("#answer").text(random);

	$('#submit').on("click", function() {
		// get user input value
		guessText = $('#guess-value').val();
		guessNum = parseInt(guessText);

		// check if the guess was between 1-100
		// if not, send "invalid guess" alert
		if(guessNum < 0 || guessNum > 100 && counter > 0) {
			alert("Invalid guess!");
		}
		else {
			// logs current guess
			$("#value").text(guessText);

			// decrement number of attempts left
			if (counter > 0) {
				counter--;
				$("#attempts").text(counter);
			}

			// providing hints to the user
			var difference = random - guessNum;
			var differenceAbs = Math.abs(difference);

			if (difference == 0)
				$("#status").text("You won!");
			else if (differenceAbs <= 4 && difference > 0)
				$("#status").text("You're really hot! Guess higher.");
			else if (differenceAbs <= 4 && difference < 0)
				$("#status").text("You're really hot! Guess lower.");
			else if (differenceAbs <= 8 && difference > 0)
				$("#status").text("You're hot! Guess higher.");
			else if (differenceAbs <= 8 && difference < 0)
				$("#status").text("You're hot! Guess lower.");
			else if (differenceAbs <= 24 && difference > 0)
				$("#status").text("You're cold! Guess higher.");
			else if (differenceAbs <= 24 && difference < 0)
				$("#status").text("You're cold! Guess lower.");
			else if (differenceAbs > 24 && difference > 0)
				$("#status").text("You're really cold! Guess higher.");
			else if (differenceAbs > 24 && difference < 0)
				$("#status").text("You're really cold! Guess lower.");
		}

		// ending the game
		if (counter <= 0)
			$("#status").text("You lost! Try again!")

		// restarting the game
		//$('#restart').on("click", function() {
		//	counter
	});


});

