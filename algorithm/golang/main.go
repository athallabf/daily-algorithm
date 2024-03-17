package main

import (
	"fmt"
	"go-algorithm/find_the_difference"
	"go-algorithm/str_haystack"
)

func main() {
	diff := find_the_difference.FindTheDifference("abcde", "abcde")
	str := str_haystack.FindNeedleHaystack("athalla", "atha")

	fmt.Println(diff, str)
}
