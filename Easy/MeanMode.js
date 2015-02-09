function MeanMode(arr) { 

  var avg = arr.reduce(function(a,b){return a+b})/arr.length;
  
  var mode = function (arr){
    return arr.sort(function(a,b){
        return arr.filter(function(v){ return v === a }).length
             - arr.filter(function(v){ return v === b }).length
    }).pop();
  }
  
      if (avg === mode(arr)){
        return 1
          } else {
          return 0
          }

}   