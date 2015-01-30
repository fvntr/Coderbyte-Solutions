function LongestWord(sen){
	//get rid of non-alphabetic characters except spaces
	var words = sen.replace(/[^A-Za-z\s]/g, "").split(" ");
	//sort 
	var wordsDesc = words.sort(function(a, b) {
        return b.length - a.length;
    });
    return wordsDesc[0];

}