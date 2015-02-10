function FormattedDivision(num1,num2) {   
 
  result = parseFloat(num1/num2).toFixed(4).split("");
  
   for (var i=result.length-8; i >= 1; i-=3) {
            result.splice(i, 0, ',');
    }
  
  return result.join("")
  
 } 
        