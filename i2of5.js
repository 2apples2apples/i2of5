const input = document.getElementById('upcInput')
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', () => {
	const inputValue = input.value;
	console.log(inputValue)
	if (inputValue.length < 13 || inputValue.length > 13) {
		console.log('Not a valid format')
	}
	const initUpc = inputValue.split('');
	const upc = initUpc.map(Number)
	const i2of5 = [];
	console.log(upc)
	console.log(Number(initUpc[1]) + Number(initUpc[3]))


})
//test upc 7271658945363