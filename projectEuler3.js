var primeTest = function(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		};
	};
	return true;
}
var number = 600851475;
for (var j = 2; j < number; j++) {
	if (number % j === 0 && primeTest(j)) {
		x = j;
	};
};

console.log(x);