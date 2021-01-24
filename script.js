/* 
    lightImages 
    lightBody 
============================
	lightThemeImage
	darkThemeImage
	lightCalculator	
	lightHeading 
	lightResult 
	lightButtons
	lightOperationButtons
	lightResultButton
*/

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
