function StringScramble(str1,str2) { 
  
  arr1 = str1.split("");
  arr2 = str2.split("");
  result =[];
  
  for(var i=0; i<arr1.length; i++){
    for(var j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]){
          result.push(arr1[i]);
            arr2.splice(j,1);
        }
    }
  }
  
  return result.length == str2.length
}
   