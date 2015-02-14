function FibonacciChecker(num) { 
	
  	var fib = [0, 1];
  	var fibCheck = "no"
	
  	for (var i = 2; i < 1000; i++){
    	fibNums = fib[ i - 1 ] + fib[ i - 2 ];
		  fib.push(fibNums)
    }

  	for(var j = 0; j<fib.length; j++){
    	if(fib[j] == num){
        return fibCheck = "yes"
        } 
    }
  	return fibCheck
}
   