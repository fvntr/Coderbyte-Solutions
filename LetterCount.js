
function LetterCountI(str){

	wordArr = str.split(" ");
	letterCount = 0 

	for (var i = 0; i < wordArr.length; i++){

		for(var j = 0; j < wordArr[i].length;j++){

		if(wordArray[j] == wordArray[j+1]){
			letterCount += 1
			}
		}	
	}
}