
function OffLineMinimum(strArr) {
	nums = [];
	numsMin = [];

	for (var i=0;i<strArr.length;i++){
		if(!isNaN(str[i])){
			nums.push(str[i])
		} else if(nums.length>1){
			numsMin.push(nums.sort(function(a,b){return a-b})).shift();
		}
	}
	return numsMin.join(',')
}