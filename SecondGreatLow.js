function SecondGreatLow(arr) { 

  sorted = arr.sort(function(a,b){return a-b});
  uniqueArray = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos;
    })
    if(sorted.length === 2){
      return uniqueArray[0]+" "+uniqueArray[uniqueArray.length-1]
        } else{
      return uniqueArray[1]+" "+uniqueArray[uniqueArray.length-2]
        }
}
   