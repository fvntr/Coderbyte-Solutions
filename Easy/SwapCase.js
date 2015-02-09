function SwapCase(str){
	
	nstr = str.replace(/./g, function(char){
		
		if(char.match(/[A-Z]/g)){
			return char.toLowerCase();
		} else if (char.match(/[a-z]/g)){
			return char.toUpperCase()			
		} else{
			return char
		}
	});
	
	return nstr 
}