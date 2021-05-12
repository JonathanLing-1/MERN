/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function merge(left, right){
    let arr=[];

    while (left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

function mergeSort(nums){

    const half = nums.length/2

    if(nums.length < 2){
        return nums
    }
    const left = nums.splice(0, half);

    return merge(mergeSort(left),mergeSort(nums))
    // return merge(mergeSort(nums.slice(0,Math.floor(nums.length/2))),mergeSort(nums.slice(Math.floor(nums.length/2), nums.length)))
}


console.log(mergeSort([12,20,5,4,6,31,27]))
// structure of a recursive function involves 2 main parts


// function factorial(num){
//     // Part 1: Base case
//     if(num == 1){
//         // to break the recursive chain, we need to return something
//         return 1;
//     }

//     // Part 2 (optional): Any additional logic needed

//     // Part 3: Recursive call
//     // let numMinus1Fac = factorial(num - 1);
//     // return num * numMinus1Fac
//     return num * factorial(num - 1);

// }

// factorial(4);

function mergeExmpl(left, right){
    const result = [];
    let iLeft=0, iRight=0;

    while(iLeft < left.length && iRight < right.length){
        if(left[iLeft] < right[iLeft]){
            result.push(left[iLeft]);
            iLeft++;

        }else if (left[iLeft] > right[iRight]){
            result.push(right[iRight]);
            iRight++
        }else {
            result.push(left[iRight], right[iRight]);
            iLeft++;
            iRight++;
        }
    }
    while (iLeft < left.length){
        result.push(left[iLeft]);
        iLeft++;
    }
    while(iRight < right.length){
        result.push(right[iRight]);
        iRight++;
    }
    return result;
}

