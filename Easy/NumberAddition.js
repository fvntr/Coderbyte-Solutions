function NumberAddition(str) { 
  return str.replace(/\D/g," ").split(" ").reduce(function(a,b){
    return Number(a)+Number(b)
  });
}