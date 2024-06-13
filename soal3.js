function countOccurrences(input, query) {
	let frequencyMap = {};

	for (let i = 0; i < input.length; i++) {
		if (frequencyMap[input[i]]) {
			frequencyMap[input[i]]++;
		} else {
			frequencyMap[input[i]] = 1;
		}
	}

	let result = [];

	for (let i = 0; i < query.length; i++) {
		if (frequencyMap[query[i]]) {
			result.push(frequencyMap[query[i]]);
		} else {
			result.push(0);
		}
	}

	return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const OUTPUT = countOccurrences(INPUT, QUERY);
console.log(OUTPUT);
