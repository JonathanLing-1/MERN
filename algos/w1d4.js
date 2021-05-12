/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partition(nums = [], left = 0, right = nums.length-1) {
    
    var midpoint = Math.floor(nums.length/2);
    var i = left
    var j = right

    while( i<=j ){
        
        if(nums[i]>nums[midpoint]){
            if(nums[j]<=nums[midpoint]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++
                j--
            }else{
                j--
            }
        }else{
            i++
        }
    }
    return nums
}

console.log(partition([10,5,6,7,13]));


// WRONG
function partition2(nums = [], left = 0, right = nums.length-1){
    
    var midpoint = Math.floor(nums.length/2);
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]>nums[midpoint]){
            let temp= nums[i]
            nums.splice(i,1);
            nums.push(temp);
        }
    }
    return nums
}
console.log(partition2([10,5,6,7,13]));



function partition3(nums = [], left = 0, right = nums.length-1){
    
    let pivot = nums[Math.floor(nums.length/2)];
    
    while (left <= right){
        while(nums[left] < pivot){
            left ++;
        }
        while (nums[right] >= pivot){
            right --;
        }
        if(left <= right){
            [nums[left], nums[right]] = [nums[right],nums[left]];
            left++;
            right--;
        }
    } 
    //one last swap
    [nums[pivot], nums[left]] = [nums[left,nums[pivot]]];
    return left;
}
console.log(partition3([10,5,6,7,13]));