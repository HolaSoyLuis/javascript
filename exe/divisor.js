const getValues = (number) => {
	let values = []
	for(let i = 1; i < number; i++){
		if(number % i == 0) values.push(number / i)
	}
	return values
}

console.log(getValues(60))
