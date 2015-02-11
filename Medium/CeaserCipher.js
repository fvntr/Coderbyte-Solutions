function CaesarCipher(str,num) { 
  
  return str.replace(/[a-z]/ig, function(letter){
    
    var encoded = letter.charCodeAt()+num;
    
    if(letter == letter.toLowerCase() && encoded >122){
    	var ztoa = (encoded-122) + 96;
        return String.fromCharCode(ztoa);
    }
    
    if(letter == letter.toUpperCase() && encoded >90){
    	var capZtoA = (encoded -90) +64;
      	return String.fromCharCode(capZtoA);
    }
    
    return String.fromCharCode(encoded)
	
  });       
}
   

   