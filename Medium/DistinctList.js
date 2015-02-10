function DistinctList(arr) { 
  
  arr = arr.sort(function(a,b){return a-b});
  counter  = 0;
  counter1 = 0;
  
  for(var i=0; i<arr.length; i++){
    if(arr[i]==arr[i+1]){
      counter++;
    } else if(counter<counter1){
      counter1 = counter;
    } else {
        
        
        }
        
    }
  return counter
}
