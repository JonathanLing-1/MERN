/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
        - start by partitioning the full array
            (use the previously built partition algo).
        - then partition the left side of the array
            (left of the returned partition idx) and the right side
            (right of the returned partition idx), recursively.
*/
function partition(nums = [], left = 0, right = nums.length - 1) {
    if(left === right){
        return left;
    }

    const pivotVal = nums[right];

    let newPIdx = left;

    for(let i = left; i < right; i++) {
        if(nums[i] <= pivotVal) {
            [nums[newPIdx], nums[i]] = [nums[i], nums[newPIdx]];
            newPIdx++;
        }
    }

    [nums[newPIdx], nums[right]] = [nums[right], nums[newPIdx]];
    return newPIdx;
}

function quickSort(nums = [], left = 0, right = nums.length-1){
    //BASE CASE
    if( left >= right){
        return nums
    }
    // if(nums.length<2){
    //     return nums
    // }
    //WORK
    let newPivot = partition(nums)
    quickSort(nums, left, newPivot-1)
    //RETURN

    // return quickSort(nums.splice(0,partition(nums))).concat(quickSort(nums))
    return quickSort(nums, newPivot+1, right)

}

console.log(quickSort([27,333,12,15,2346,23111,476,52]));
console.log(partition([27,333,12,15,2346,23111,476,52]));
console.log(quickSort([555,23,47,998,65312,234,68789,45,3121]));