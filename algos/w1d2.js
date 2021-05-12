/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/
function insertionSort(nums){
    for(let i=0; i<nums.length; i++){
        // 
        for(let j=i+1; j<nums.length; j++){
            if(nums[j]<nums[i]){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums;
}

const nums1=[10,7,2,3,5]
const expected1= [2,3,5,7,10]
// ************************************************************
console.log(insertionSort(nums1));

function insertionSort(nums){
    for(let i=0; i<nums.length; i++){
        // 
        for(let j=i+1; j<nums.length; j++){
            let temp = nums[j]
            if(nums[i]>temp){
                nums[j] = nums[i]
                nums[i] = temp
            }
        }
    }
    return nums;
}
// 
const nums1=[4,7,12,3,16]
// const expected1= [2,3,5,7,10]

console.log(insertionSort(nums1));
// ***************************************************************
function insertionSortExmpl(nums){
    len = nums.length

    for(let i = 1; i <len; i ++){
        let temp = nums[i]
        let j = i-1
        while((j> -1) && (temp < nums[j])){
            nums[j+1] = nums[j];
            j--
        }
        nums[j+1] = temp;
    }
    return nums;
}