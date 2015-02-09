function PrimeTime(num) { 
 
 if (isNaN(num) || !isFinite(num) || num % 1 || num < 2){
 	return false; 
 }
 
 if (num % 2 == 0){
 	return false
 };

 if (num % 3 == 0){
	return false
 };

 	for (var i=5;i<=Math.sqrt(num);i+=6) {
  			if (num % i ==0)     return false;
  			if (num %(i+2)==0) 	 return false;
 		}

 	return true;
}
