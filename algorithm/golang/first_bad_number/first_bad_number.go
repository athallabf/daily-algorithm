package main

import "fmt"

var badVersion int

func isBadVersion(version int) bool {
	return version >= badVersion
}

func firstBadVersion(n int) int {
	left := 1
	right := n

	for left < right {
		mid := left + (right-left)/2

		if isBadVersion(mid) {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}

func main() {
	badVersion = 4

	result := firstBadVersion(5)

	fmt.Println("First bad version is:", result)
}
