
function LetterCountI(str){

	str = str.split(" ");
	
	greatest = ""
	greatestCount = 0;

	for (var i = 0; i < str.length; i++){

		word = str[i].split("").sort();
		letterCount = 0;
		prevLetter = "";

		for(var j = 0; j < word.length; j++){

			if(prevLetter == word[j]){
				letterCount++
			} else{
				prevLetter = word[j];
				letterCount = 0;
			}
			
			if(letterCount > greatestCount){
				greatest = str[i];
				greatestCount = letterCount
			}
		}
	}

	if(greatest == ""){
		return -1;
	} 
	return greatest
}

					