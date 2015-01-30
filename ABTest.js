function ABCheck(str){
	if(str.match(/a...b/g) !== null){
		return true
	} else {
		return false
	}
}