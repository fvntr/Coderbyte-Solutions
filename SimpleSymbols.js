function SimpleSymbols(str) { 

  for (var i = 0; i < str.length; i++) {
  		
  	var letter = str[i].match(/[a-zA-Z]/);
	
	if (letter) {
	
		if(str[i-1] !== "+" || str[i+1] !== "+"){
			
			return false;
			
			}
		}
	}
	
	return true;    
}

