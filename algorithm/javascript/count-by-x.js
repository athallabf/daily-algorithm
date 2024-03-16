function countBy(b, n) {
	const z = [];

	for (let i = 0; i < n; i++) {
		z[i] = (i + 1) * b;
	}

	return z;

	// const result = Array.from({ length: n }, (_, i) => b * (i + 1));
	// return result;
}

console.log(countBy(2, 10)); // deret aritmatika dengan n = 10 lalu beda 2
