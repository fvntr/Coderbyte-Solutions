function PermutationStep(num) { 
  
  nums= String(num).split("");
  
    permutations = nums.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
}, []);
 
  

  // code goes here  
  var a = permutations.join(" ").replace(/,/g,"").split(" ").sort().filter(onlyUnique);
  
  var b = a.filter(function(c){return c > num});
  
  return b.length>0 ? b.shift() : -1
         
}
   

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}