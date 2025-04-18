function metric() {
	var weight = document.getElementById('kg').value;
	var height = document.getElementById('m').value;
	var bmi = (weight / (Math.pow(height, 2))).toFixed(1);
	
	if (bmi < 18.5) {
		window.alert(bmi + ' = Underweight');
	}
		else if (bmi >= 18.5 && bmi <= 24.9) {
			window.alert(bmi + ' = Normal weight');
		}
		else if (bmi >= 25 && bmi <= 29.9) {
			window.alert(bmi + ' = Overweight');
		}
		else if (bmi >= 30 && bmi <= 34.9) {
			window.alert(bmi + ' = Obese');
		}
		else if (bmi >= 35) {
			window.alert(bmi + ' = Extremely Obese')
		}
}

function imperial() {
	var weight = document.getElementById('lb').value;
	var height = document.getElementById('in').value;
	var bmi = (Math.abs(weight / (Math.pow(height, 2))) * 703).toFixed(1);
	
	if (bmi < 18.5) {
		window.alert(bmi + ' = Underweight');
	}
		else if (bmi >= 18.5 && bmi <= 24.9) {
			window.alert(bmi + ' = Normal weight');
		}
		else if (bmi >= 25 && bmi <= 29.9) {
			window.alert(bmi + ' = Overweight');
		}
		else if (bmi >= 30) {
			window.alert(bmi + ' = Obese');
		}
		else if (bmi >= 35) {
			window.alert(bmi + ' = Extremely Obese')
		}
}