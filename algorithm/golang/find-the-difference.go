package main

import "fmt"

func findTheDifference(s, t string) string {
	count := 0

	for _, res := range s + t {
		count ^= int(res)
	}

	return string(byte(count))
}

func main() {
	fmt.Println(findTheDifference("abf", "abfe"))
}
