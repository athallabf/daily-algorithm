package search_insert

func SearchInsert(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for right >= left {

		mid := (left + right) / 2

		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return left
}
