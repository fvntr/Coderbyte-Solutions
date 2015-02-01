/*Have the function LetterCountI(str) take the str parameter 
being passed and return the first word with the greatest number 
of repeated letters. For example: "Today, is the greatest day 
ever!" should return greatest because it has 2 e's (and 2 t's) 
and it comes before ever which also has 2 e's. If there are no 
words with repeating letters return -1. Words will be separated 
by spaces. */

function LetterCountI(str){
	//take words and put them into an array
	wordArr = str.split(" ");
	letterCount = 0 
	//loop over each word 
	for (var i = 0; i < wordArr.length; i++){
	//loop over each letter of each word
		for(var j = 0; j < wordArr[i].length;j++){
	//create a conditional, if the letter appears again add to a counter
		if(wordArray[j] == wordArray[j+1]){
			letterCount += 1
		}
	}	


	//

	}

	




}