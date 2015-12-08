var numbers = [];
var total = 0;

for (i = 1; i < 1000; i++) {
	if (i%3===0) {
	numbers.push(i);
	}
	else if (i%5===0) {
		numbers.push(i);
	};
};

console.log(numbers);
for (var i = 0; i < numbers.length; i++) {
	total += numbers[i];
};
console.log(total);