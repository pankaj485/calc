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

let screen = document.getElementById('resultScreen');
let buttons = document.querySelectorAll('button');
let outputValue = 0;
for (item of buttons) {
	item.addEventListener('click', (event) => {
		let buttonValue = event.target.innerHTML;
		// console.log(`button value : ${buttonValue}`);
		screen.innerHTML += buttonValue;

		if (buttonValue === 'AC') {
			outputValue = 0;
			screen.innerHTML = '&nbsp;';
		} else if (buttonValue === '=') {
			// prints output
			screen.innerHTML = eval(outputValue);
		} else {
			// updating the to evaluate things
			outputValue += buttonValue;
		}
	});
}
