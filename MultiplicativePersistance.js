function MultiplicativePersistence(num) {
  if (num<10) return 0;
  num = num.toString().split('').reduce(function(a,b){
    return parseInt(a)*parseInt(b);
  });
  return 1 + MultiplicativePersistence(num);
}
   