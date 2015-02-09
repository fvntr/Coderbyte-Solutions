
function AlphabetSoup(str){
	var letterArr = str.match(/[A-Za-z]/g).split("");
	return letterArr.sort().join("")
}