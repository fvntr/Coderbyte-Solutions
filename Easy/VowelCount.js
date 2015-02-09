function VowelCount(str){
	return str.replace(/[^aeiou]/ig, "").length
}