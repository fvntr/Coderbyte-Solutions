function LookSaySequence(num) { 
  
  var arr = String(num).split("")
  var target = [];
  var count = 0;
  
  for(var i=0;i<arr.length;i++){
    count++;
    if(arr[i] !== arr[i+1]){
      target.push(count);
      target.push(arr[i]);
      count = 0;
    }
  }
  return target.join('');      
}