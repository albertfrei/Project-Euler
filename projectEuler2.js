var fibAraay = [1, 2];
var evenArray = [];
var total = 0;
for (var i = 1; i < 10; i++) {
	fibAraay.push(fibAraay[i] + fibAraay[i-1]);
};
for (var i = 0; i < fibAraay.length; i++) {
	if (fibAraay[i]%2===0) {
		evenArray.push(fibAraay[i]);
	};
};
for (var i = 0; i < evenArray.length; i++) {
	total += evenArray[i];
};

console.log(total);