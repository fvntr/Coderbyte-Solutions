function LetterCapitalize(str){

	//remove non-alphabet characters
	var words = str.split(" ");

	//loop through array and capitalize first letter of each element
	for(var i = 0; i < words.length; i++){
		
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}

	return words.join(" ");
}