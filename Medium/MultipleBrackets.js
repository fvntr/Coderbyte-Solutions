function MultipleBrackets(str) { 
  
  arr = str.split("")

  openRound =0;
  closedRound =0;
  openSquare = 0;
  closedSquare = 0;
  
  for(var i=0; i<arr.length; i++){
  
  	if(arr[i] === "("){
    	openRound++
    }
    if(arr[i] === ")"){
    	closedRound++
    }
    if(arr[i] === "["){
    	openSquare++
    }
    if(arr[i] === "]"){
    	closedSquare++
    }
    
 	if(closedRound>openRound || closedSquare > openSquare){
    	return 0;
    }
  }

	if(openRound === closedRound && openSquare == closedSquare){
    	return 1 + " "+parseInt(openRound+openSquare);
    }   
}