function BracketMatcher(str) {
  
  var check = 0;
  str = str.split("");
  
  for (var i = 0; i < str.length; i++) {
    
    if (str[i] == "("){
    	check++;
    }
    
    if (str[i] == ")"){
    	check--;
    }
    
    if (check < 0){
    	return 0;
    }
  }
  	
  	if(check == 0){ 			
  		return 1
  	} else{
  		return 0
  	}

}

         