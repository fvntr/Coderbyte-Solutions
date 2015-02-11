function TripleDouble(num1,num2) { 

  arr1 = num1.toString().match(/(\d)\1+/g);
  arr2 = num2.toString().match(/(\d)\1+/g);
  
  triple = [];
  match = 0
  
  if(arr1 !== null){
    for (var i= 0; i<arr1.length; i++){
      if(arr1[i].length === 3){
        triple.push(arr1[i]);
     }
    }
  }
  
  if(arr2 !== null){

    for (var j=0; j<arr2.length; j++){
	     for(var k=0; k<triple.length; k++){
    	   if(triple[k].slice(0,-1) == arr2[j]){
          	match = 1
        }
      }
    }
 }
 

 return match

}