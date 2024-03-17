function isAnagram(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const freq = new Array(26).fill(0);

	for (let i = 0; i < t.length; i++) {
		freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
		freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
	}

	for (const index of freq) {
		if (freq[index] !== 0) return false;
	}

	return true;
}

console.log(isAnagram("anagram", "nagaram"));
