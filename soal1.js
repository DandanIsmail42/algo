function reverseAlphabets(str) {
	let alphabets = "";
	let numbers = "";

	for (let i = 0; i < str.length; i++) {
		if (isNaN(str[i])) {
			alphabets += str[i];
		} else {
			numbers += str[i];
		}
	}

	let reversedAlphabets = "";
	for (let i = alphabets.length - 1; i >= 0; i--) {
		reversedAlphabets += alphabets[i];
	}

	return reversedAlphabets + numbers;
}

const input = "NEGIE1";
const result = reverseAlphabets(input);
console.log(result);
