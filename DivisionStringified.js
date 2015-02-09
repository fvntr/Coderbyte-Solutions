function DivisionStringified(num1,num2) { 

  result = Math.round(num1/num2).toString().split("");
  
   for (var i=result.length-3; i >= 1; i-=3) {
    result.splice(i, 0, ',');
  }
  
  return result.join("")
}
