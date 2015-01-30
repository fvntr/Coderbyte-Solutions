function LetterChanges(string) {
	return string.replace(/[a-z]/ig, function (letter) {
	
	//get next letter 
	var nextLetter = String.fromCharCode(letter.charCodeAt() + 1);

	//uppercase vowels
	if (/[aeiou]/g.test(nextLetter)){
		nextLetter = nextLetter.toUpperCase()
	};

	//take care of "Z/z" case
	return letter == 'Z' ? 'A' : letter == 'z' ? 'A' : nextLetter;

	});
}
