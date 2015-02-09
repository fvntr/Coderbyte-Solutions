function DashInsert(str) { 
  arr = String(str).split("");
  nArr = []
  for (var i=0; i <arr.length-1; i++){
    if((arr[i]%2!==0)&(arr[i+1]%2!==0)){
       nArr.push(arr[i]+"-")
         } else{
         nArr.push(arr[i])
         }
  }

  return nArr.join("")+arr[arr.length-1]; 
         
}
  