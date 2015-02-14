var reductions = {
    	"ab" : "c",
    	"ba" : "c",
    	"ac" : "b",
    	"ca" : "b",
    	"bc" : "a",
    	"cb" : "a"
  	};
  
  
  	function StringReduction(str){
    	
      	var lastValue;
      
      	while(str !== lastValue){
          lastValue = str
          for(key in reductions){
          	str = str.replace(key, reductions[key]);
            console.log(str)
          }
     }    
      return str.length
}