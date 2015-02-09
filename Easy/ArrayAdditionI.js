function ArrayAdditionI(arr) { 
  
  var greatest = arr.sort(function(a,b){return b-a}).shift();
  var sum = 0;
  
  for(var i=0; i<arr.length; i++){
    sum +=arr[i]
      for(var j=0; j<arr.length; j++){
        if(i !== j){
           sum += arr[j]
             if(sum == greatest){
               return true
             }
        }
      }
    for(var k=0;k<arr.length;k++){
      if(i !== k){
        sum -= arr[k]
          if(sum == greatest){
            return true
          }
      }
    }
    sum = 0
  }
  
  return false
  
}
   