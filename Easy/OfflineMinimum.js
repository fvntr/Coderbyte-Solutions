function OffLineMinimum(strArr) { 
  
  nums =[];
  numsMin =[];
  
  for(var i=0; i<strArr.length; i++){
    if(!isNaN(strArr[i])){
       nums.push(strArr[i]);
        } else {
          numsMin.push(nums.sort(function(a,b){return a-b}).shift());  
      }
   }
  return numsMin.join(',')
}
   