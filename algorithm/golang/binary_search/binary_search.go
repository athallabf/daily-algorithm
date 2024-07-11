package binary_search

func BinarySearch(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for right >= left {
		mid := (left + right) / 2
		if target == nums[mid] {
			return mid
		} else if target < nums[mid] {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return -1
}
