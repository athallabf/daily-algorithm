package str_haystack

import "strings"

func FindNeedleHaystack(haystack string, needle string) int {
	return strings.Index(haystack, needle)
}
