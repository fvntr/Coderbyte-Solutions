function LetterChanges(string) {
	return string.replace(/[a-z]/ig, function (letter) {
	
	var nextLetter = String.fromCharCode(letter.charCodeAt() + 1);

	if (/[aeiou]/g.test(nextLetter)){
		nextLetter = nextLetter.toUpperCase()
		};

	return letter == 'Z' ? 'A' : letter == 'z' ? 'A' : nextLetter;

		});
}
