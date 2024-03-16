package find_the_difference

func FindTheDifference(s, t string) string {
	count := 0

	for _, res := range s + t {
		count ^= int(res)
	}

	return string(byte(count))
}
