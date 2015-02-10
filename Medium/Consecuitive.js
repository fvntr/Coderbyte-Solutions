function Consecutive(arr) { 
 
  sorted= arr.sort(function(a,b){return a-b});
  counter = 0
  
    for(var i=0; i<sorted.length-1; i++){
      
      diff = sorted[i+1]-sorted[i];
      console.log(diff)
      counter += diff-1
      console.log(counter)  
    }
  
  return counter
         
}