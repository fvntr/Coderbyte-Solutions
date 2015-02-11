function ThreeFiveMultiples(num) { 
 
  multiples =[];
  
  if(num>3){
  for(var i=3; i<num; i++){
  	if(i%3===0){
    	multiples.push(i);
    } else if(i%5===0){
    	multiples.push(i);
    }  
  }
  return multiples.reduce(function(a,b){return a+b});
  } 
  return 0
}
   