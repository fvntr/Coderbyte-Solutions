
function Palindrome(str){
	str = str.replace(/[^a-z]/gi, "").toLowerCase();
	return str === str.split("").reverse().join("");
}