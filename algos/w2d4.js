/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.

    EXAMPLE:
    let nums = [1,2,3,4,6,7,8,10];
    
    allNonConsecutive(nums) should return:
    [
        { i: 4, n: 6},
        { i: 7, n: 10 }
    ]
    
    because at index 4, the value is 6, which is not the previous value plus 1 (4 + 1 = 5, not 6),
    and at index 7, the value is 10, which is not the previous value plus 1 (8 + 1 = 9, not 10)
    */

let nums = [1,2,3,4,6,7,8,10];

function allNonConsecutive(sortedNums){

    let results = [];

    for(let i = 1; i<sortedNums.length-1; i++){
        if(sortedNums[i]+1 != sortedNums[i+1]){
            results.push({i:i+1, n:sortedNums[i+1]});
        }
    }

    return results;
}
console.log(allNonConsecutive(nums))

/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let nums = [2, 5, 3, 6, 7, 23, 12] 
    let sum = 16
    
    findConsqSums(nums, sum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ]
    
    because 2 + 5 + 3 + 6 = 16, and those numbers are all consecutive, and
    3 + 6 + 7 = 16, and those numbers are also all consecutive
    */

let nums = [2, 5, 3, 6, 7, 23, 12] 
let sum = 16

function findConsqSums(nums, targetSum){
    let results = [];
    let sum=0;
    let sumArr=[];
//for loop to iterate through the array
// one for loop to sum consecutively until sum is reached, if past skip to next index
for(let i=0; i<nums.length; i++ ){
    for(let j= i; j<nums.length; j++){
        if(sum < targetSum){
            sum += nums[j];
            sumArr.push(nums[j]);
        }if(sum == targetSum){
            results.push(sumArr);
            sum = 0;
            sumArr = [];
        }else if(sum > targetSum){
            sum = 0;
            sumArr = [];
        }
    }
}
return results
}
console.log(findConsqSums(nums, sum))
                
let nums = [2, 5, 3, 6, 7, 23, 12] 
let sum = 16

function findConsqSums2(nums, targetSum){
    
let results = [];

let sum=0;
let sumArr=[];

let i = 0;
let j = 0;

while( i< nums.length && j < nums.length){
    if(sum < targetSum){
        sum += nums[j];
        sumArr.push(nums[j]);
        j++
    } if (sum == targetSum){
        results.push(sumArr);
        sum = 0;
        sumArr =[];
        i++;
        j=i;
    } else if (sum > targetSum){
        sum = 0;
        sumArr =[];
        i++
        j=i;
    }
}
return results

    
}
console.log(findConsqSums2(nums, sum))