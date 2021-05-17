/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/


function kMostFrequent(nums, k) {

    let expected = [];

    const freqTable = {};

    for (let i = 0; i<nums.length; i++){
        if(nums[i] in freqTable){
            freqTable[nums[i]] += 1
        } else {
            freqTable[nums[i]] = 1
        }
    }

    var kArray = [];
    for(i=1; i<=k; i++){
        var max = 0
        var dictKey;
        for(var key in freqTable){
            if(freqTable[key] > max){
                max = freqTable[key]
                dictKey = key
            }
        }
        kArray.push(dictKey)
        delete freqTable[dictKey]
    }
    return kArray
}
console.log(kMostFrequent(nums1))
console.log(kMostFrequent(nums2))
console.log(kMostFrequent(nums3))

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [4, 10, 2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];


function twoSum(nums, targetSum) {
    let expected = [];

    let i = 0;
    let j = 1;

    while(i<nums.length && j< nums.length){
        if(j == nums.length-1){
        i++;
        j=i+1;
        }if(nums[i]+nums[j] != targetSum){
            j++
        }else if(nums[i] + nums[j] == targetSum) {
            expected.push(nums[i]);
            expected.push(nums[j]);
            return expected;
        }
    }
    return expected;

}

console.log(twoSum(nums1, targetSum1))