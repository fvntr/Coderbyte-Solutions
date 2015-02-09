function Division(num1, num2) { 
  
  numsDivisibility = [];
  for(var i=0;i<1000;i++){
    if(num1%i===0){
        numsDivisibility.push(i)
      }
    if(num2%i===0){
        numsDivisibility.push(i)
    }
   }
  
  divisors = numsDivisibility.sort(function(a,b){return b-a});

  
  for(var j=0; j<divisors.length; j++){
    if(divisors[j] == divisors[j+1])
      return divisors[j]
  }         
}