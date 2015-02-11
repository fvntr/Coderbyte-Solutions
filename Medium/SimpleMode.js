function SimpleMode(arr){
    
    sorted = arr.sort(function(a,b){
        return arr.filter(function(v){ return v===b }).length
             - arr.filter(function(v){ return v===a }).length
    });
      
    if(sorted[0] !== sorted[1]){
          return -1
        } else{
          return sorted.shift();
        } 
}