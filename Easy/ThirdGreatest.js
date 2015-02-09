function ThirdGreatest(strArr) { 

  var newArr = strArr.sort(function(a,b){
   return b.length-a.length
  });
  
  return newArr[2];     
                           
}
   