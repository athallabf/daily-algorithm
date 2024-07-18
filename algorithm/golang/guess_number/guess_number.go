package main

import "fmt"

var pickedNumber int

func guess(num int) int {
	if num < pickedNumber {
		return 1
	} else if num > pickedNumber {
		return -1
	} else {
		return 0
	}
}

func guessNumber(n int) int {
	left := 1
	right := n

	for left <= right {
		mid := left + (right-left)/2
		result := guess(mid)

		if result == 0 {
			return mid
		} else if result == -1 {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return left
}

func main() {
	pickedNumber = 42

	result := guessNumber(100)

	fmt.Println("Guessed number is:", result)
}
