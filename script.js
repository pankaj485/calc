/*      
    lightBody 
    lightThemeImage
    darkThemeImage
    lightCalculator	
    lightHeading 
    lightResult 
    lightButtons
    lightOperationButtons
*/

/* =====================================
========= THEME TOOGLE FUNCTION ========
======================================== */

document.querySelector('.themeImage').addEventListener('click', () => {
	document.querySelector('.lightThemeImage').classList.toggle('hideIt');
	document.querySelector('.darkThemeImage').classList.toggle('hideIt');

	document.body.classList.toggle('lightBody');
	document.querySelector('.calculator').classList.toggle('lightCalculator');
	document.querySelector('.heading').classList.toggle('lightHeading');
	document.querySelector('.result').classList.toggle('lightResult');
	document.querySelector('.buttons').classList.toggle('lightButtons');
	let x = document.querySelectorAll('.operationButtons');
	for (let i = 0; i < x.length; i++) {
		x[i].classList.toggle('lightOperationButtons');
	}
	document.querySelector('.resultButton').classList.toggle('lightResultButton');
});

/* ======================================
========= CALCULATOR FUNCTIONALITY =======
======================================== */

// =============== button click function =============
let screen = document.getElementById('resultScreen');
let buttons = document.querySelectorAll('button');
let outputValue = '';

for (item of buttons) {
	item.addEventListener('click', (event) => {
		let clickedButtonValue = event.target.innerHTML;
		screen.innerHTML += clickedButtonValue;

		if (clickedButtonValue === 'AC') {
			outputValue = '';
			screen.innerHTML = '&nbsp;';
		} else if (clickedButtonValue === '=') {
			screen.innerHTML = eval(outputValue);
		} else {
			outputValue += clickedButtonValue;
		}
	});
}

// =============== keydown function =============
document.addEventListener('keydown', (event) => {
	let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+', '=', 'Enter', 'Escape'];
	if (validKeys.includes(event.key)) {
		let typedButtonValue = event.key;
		screen.innerHTML += typedButtonValue;

		if (typedButtonValue === 'Escape') {
			outputValue = '';
			screen.innerHTML = '&nbsp;';
		} else if (typedButtonValue === 'Enter') {
			screen.innerHTML = eval(outputValue);
		} else {
			outputValue += typedButtonValue;
		}
	}
});
