/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort

    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const nums1= [1,4,7,6,10,2]
const expected1= [1,2,3,6,7,10]

function bubbleSort(nums){
    swapped = false
    let i =0;

    while (i<nums.length){
        if (nums[i]>nums[i+1]){
            let temp = nums[i+1];
            nums[i+1] = nums[i];
            nums[i] = temp;
            i++
            swapped = true
        }
        if (swapped){
            return bubbleSort(nums)
        }
        i++
    }
    return nums 
    
}
console.log(bubbleSort(nums1));

function bubbleSortExmpl(nums){
    let isSorted = false;

    while (isSorted==false){
        isSorted = true;

        for (let i=0; i < nums.length - 1; i ++) {
            const j = i+1;
            if(nums[i]> nums[j]){
                isSorted = false;
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
}






/* 
    https://visualgo.net/en/sorting

    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.

    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
const nums1= [1,4,7,6,10,2]
const expected1= [1,2,3,6,7,10]

function selectionSort(nums){

    for( var i = 0; i <nums.length; i++){

        let min = i;
        for( var j = i+1; j<nums.length; j++){

            if(nums[j]<nums[i]){
                min = j;
            }

            if(min != i){
                let temp = nums[i];
                nums[i] = nums[min];
                nums[min] = temp;
            }
        }
    }
    return nums
}
console.log(selectionSort(nums1))