var numTries = 3;
		var answer = Math.floor(Math.random() * 11);

		function checkGuess() {
			var guess = parseInt(document.getElementById("guess").value);

			if (guess === answer) {
				document.getElementById("result").innerHTML = "Parabéns! Você acertou!";
				numTries = 3;
				answer = Math.floor(Math.random() * 11);
				document.getElementById("background-" + answer).classList.remove("hidden");
			}
			else {
				numTries--;
				if (numTries === 0) {
					document.getElementById("result").innerHTML = "Que pena! Você errou. A resposta correta é: " + answer + ".";
					numTries = 3;
					answer = Math.floor(Math.random() * 11);
					document.getElementById("background-" + answer).classList.remove("hidden");
				}
			else {
				document.getElementById("result").innerHTML = "Você errou. Tente novamente. Você ainda tem " + numTries + " tentativas.";
				}
			}
			document.getElementById("guess").value = "";
		}