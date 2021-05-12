/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
        - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg

    EXAMPLE:
    let nums1 = [4,1,2,3,4];
    let nums2 = [1,2,3,5,5,2];
    
    symmetricDifference(nums1, nums2) should return [4,5] because 4 is only in nums1, 5 is only in nums2, 
    and every other value can be found in the other array as well.
    */

   let nums1 = [4,1,2,3,4];
   let nums2 = [1,2,3,5,5,2];

   function symmetricDifference(setA, setB){

    const result=[];

    let iA = 0;
    let iB = 0;

    while (iA < setA.length){
            if( setB.includes(setA[iA])){
                iA++
            }else if(result.includes(setA[iA])){
                iA++
            }else{
                result.push(setA[iA]);
            }
        }
    while (iB < setB.length){
            if( setA.includes(setB[iB])){
                iB++
            }else if(result.includes(setB[iB])){
                iB++
            }else{
                result.push(setB[iB]);
            }
        }
        return result;
    }

    function symmetricDifferenceBetter(setA, setB){

        let difference = setA.filter(x => !setB.includes(x)).concat(setB.filter(x => !setA.includes(x)))

        return dedupeSorted(difference)

    }



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
      
console.log(symmetricDifference(nums1, nums2))
console.log(symmetricDifferenceBetter(nums1, nums2))