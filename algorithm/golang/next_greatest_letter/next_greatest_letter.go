package next_greatest_letter

func NextGreatestLetter(letters []byte, target byte) byte {
	left := 0
	right := len(letters) - 1
	// [3, 5, 7, 9, 11] 4
	for left <= right {
		mid := (left + right) / 2 // 0

		if letters[mid] > target { // 3 > 4?
			right = mid - 1 // 0
		} else {
			left = mid + 1 // 1
		}
	}

	if left >= len(letters) {
		return letters[0]
	}
	return letters[left]
}
