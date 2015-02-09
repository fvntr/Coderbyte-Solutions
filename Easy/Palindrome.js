
function Palindrome(str){
	str = str.replace(/[^a-z]/gi, "");
	return str === str.split("").reverse().join("");
}