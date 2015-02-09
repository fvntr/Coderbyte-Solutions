function PowersofTwo(num) { 
  for(var i=0; i<num; i++){
    var twoRaised = Math.pow(2,i);
    if(twoRaised === num){
      return true
        }
    }
  return false
}