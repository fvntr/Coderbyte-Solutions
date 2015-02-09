
function CountingMinutes(str){
	time = str.split("-")
	
	time1 = time[0].split(":")
	time1hour = parseInt(time1[0])
	time1mins = parseInt(time1[1].match(/\d/g).join(""))
	time1ampm = time1[1].match(/[a-zA-z]/g).join("")
	
	time2 = time[1].split(":")
	time2hour = parseInt(time2[0])
	time2mins = parseInt(time2[1].match(/\d/g).join(""))
	time2ampm = time2[1].match(/[a-zA-z]/g).join("")

	if(time1ampm == "pm"){
		time1hour += 12
	} 

	if(time2ampm == "pm"){
		time2hour += 12
	}

	if(time1hour>time2hour || time1hour == time2hour && time1mins > time2mins){
		return (1440+(time2hour-time1hour)*60 +(time2mins-time1mins))
	}else{
		return ((time2hour-time1hour)*60+(time2mins-time1mins))
	}
	
}