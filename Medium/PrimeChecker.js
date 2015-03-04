function PrimeChecker(num) { 

    nums = String(num).split("")
  
    permutations = nums.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
}, []);
 
    var a = permutations.join(" ").replace(/,/g,"").split(" ");
  
    return a.filter(isPrime).length > 0 ? 1 : 0
 
         
}
   

function isPrime(num) {
  if (num < 2) return false;
  if (num == 2 || num == 3) return true;
  if (num % 2 == 0 || num % 3 == 0) return false;
  
  var l = Math.floor(Math.sqrt(num));
  for (var i = 1; (6 * i - 1) <= l; i++) {
    if (num % (i * 6 - 1) == 0 || num % (i * 6 + 1) == 0) return false;
  }
  return true; 
}


    
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeChecker(readline());           
