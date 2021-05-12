/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    let nums1 = [0, 1, 2, 2, 2, 7];
    let nums2 = [2, 2, 6, 6, 7];

    orderedIntersection(nums1, nums2) should return [2, 7]
*/

function dedupeSorted(nums) {
    var i = nums.length-1;
    var newArr = [];
    while(i>=0){
      if(nums[i] == nums[i-1]){
        i--
      }else{
        newArr.push(nums[i]);
        i--;
      }
    }
    return newArr.sort();
  }


function orderedIntersection(sortedA, sortedB){

    // let arr1 = dedupeSorted(sortedA);
    // let arr2 = dedupeSorted(sortedB);

    const result = [];
    let iA = 0;
    let iB = 0;

    while(iA < sortedA.length && iB < sortedB.length){
        if(sortedA[iA]<sortedB[iB]){
            iA++;
            // console.log(iA)
        }else if(sortedA[iA]>sortedB[iA]){
            iB++;
            // console.log(iB)
        }else{
            result.push(sortedA[iA]);
            iA++
            iB++
        }
    }
    return dedupeSorted(result);

}
let nums1 = [0, 1, 2, 2, 2, 7];
let nums2 = [2, 2, 6, 6, 7];

console.log(orderedIntersection(nums1, nums2))