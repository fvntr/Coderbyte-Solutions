function NumberSearch(str) { 
  
  letters = str.match(/[A-Za-z]/g);
  numbers = str.match(/\d/g);
  sum = numbers.reduce(function(a,b){return parseInt(a)+parseInt(b)});
  
  return Math.round(sum / letters.length)
         
}