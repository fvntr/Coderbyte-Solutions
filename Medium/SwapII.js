function SwapII(str) { 
  
  	str = str.replace(/./g, function(char){
		
		if(char.match(/[A-Z]/g)){
			return char.toLowerCase();
		} else if (char.match(/[a-z]/g)){
			return char.toUpperCase()			
		} else{
			return char
		}
	});
  
   return str.replace(/(\d)[a-z]+(\d)/gi, function (c) { 
     return c[c.length-1] + c.slice(1, c.length-1) + c[0] 
   });
}
   