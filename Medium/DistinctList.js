function DistinctList(arr) { 
	
  arr= arr.sort();
  counter = 0;
  	
  for(var i=0; i<arr.length; i++){
    if(arr[i] == arr[i+1]){
    	counter++
    	}	
    }
  return counter;          
}