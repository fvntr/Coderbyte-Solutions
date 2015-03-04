function MostFreeTime(strArr){
	var events =[];
	for(var i=0; i<strArr.length; i++){
		var timeSplit = strArr[i].split("-");
		events.push([ampmToMins(timeSplit[0]), ampmToMins(timeSplit[1])]);
	}

	events.sort(function(a,b){
		return a[0] - b[0];
	})


	longest = 0 
	for(i =0; i<events.length-1; i++){
		freeTime = events[i+1][0] - events[i][1];
		if(freeTime>longest){
			longest = freeTime
		}

	}

	return minsToampm(longest)

}



function ampmToMins(str){
	if(str.slice(5,7)=="PM"){
		return 60*(12 + parseInt(str.slice(0,2) % 12)) +parseInt(str.slice(3,5))
	} else if (str.slice(5,7)=="AM"){
		return 60*(parseInt(str.slice(0,2) % 12)) +parseInt(str.slice(3,5))
	}
}


function minsToampm(num){
		var hours = Math.floor(num/60);
                if(hours<10){
                	hours = "0"+hours;
                }
		
		var mins = num % 60;
                if(mins<10){
                	mins = "0"+mins;
                }

		var time = hours + ":" + mins

		return time		
}
	

