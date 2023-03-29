function search(nums, target) {
    let start = 0;
    let end = nums.length - 1
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] == target) {
            return middle
        } else if (nums[middle] > target) {
            end = middle - 1
        } else if (nums[middle] < target) {
            start = middle + 1
        }

    }
    // console.log(start, end, middle);
    return start
}

console.log(search([1, 2, 3, 5, 6, 7],4));