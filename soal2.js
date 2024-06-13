function findLongestWord(sentence) {
	let words = sentence.split(" ");

	let longestWord = "";

	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}

	return longestWord;
}

const sentence = "Selamat malam dan sampai jumpa";
const longestWord = findLongestWord(sentence);
console.log(longestWord);
