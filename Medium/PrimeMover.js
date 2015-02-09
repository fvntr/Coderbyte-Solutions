function PrimeMover(num){

var primes = [];

for(var i=2;i<10000;i++){
	if(isPrime(i)){
		primes.push(i);
	}
}


function isPrime(n) {
 	if (isNaN(n) || !isFinite(n) || n%1 || n<2){
 		return false;
 		} 

 	var m=Math.sqrt(n);

 	for (var i=2;i<=m;i++) if (n%i==0){
 		return false;
 		}
 		return true;
	}
	
	return primes[num-1]
}

