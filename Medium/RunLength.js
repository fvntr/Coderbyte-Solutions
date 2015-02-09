function RunLength(str){
	
	str = str.split("");
	counter = 0;
	target = [];

	for (var i=0; i<str.length; i++){
		
		counter++
		if(str[i] !== str[i+1]){
			target.push(counter);	
			target.push(str[i]);
			counter = 0
		}
	}

	return target.join("")

}