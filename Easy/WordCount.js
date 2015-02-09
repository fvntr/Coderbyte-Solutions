function WordCount(str){
	return str.split(" ").filter(function(e){
 		return e !== ""
		})
}