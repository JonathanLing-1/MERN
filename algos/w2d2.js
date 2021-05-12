/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal

    EXAMPLE:
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]

    diagonalDifference(matrix) should return 2, because (1 + 5 + 9) - (3 + 5 + 9) has an absolute value of 2
*/
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

function diagonalDifference(sqrMatrix) {

    let leftDiagonal = 0;
    let rightDiagonal =0;
    let leftI = 0;
    let rightI = sqrMatrix.length-1;

    for( let i = 0; i<sqrMatrix.length; i++){
        leftDiagonal += Math.abs(sqrMatrix[i][leftI]);
        rightDiagonal += Math.abs(sqrMatrix[i][rightI]);
        leftI++;
        rightI--;
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}
console.log(diagonalDifference(matrix));

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    const nums1 = [1, 2, 2, 2, 7];
    const nums2 = [2, 2, 6, 6, 7];

    orderedMultiSetUnion(nums1, nums2) should return [1,2,2,2,6,6,7]
*/
const nums1 = [1, 2, 2, 2, 7];
const nums2 = [2, 2, 6, 6, 7];

function orderedMultiSetUnion(sortedA, sortedB){

    const unionArr = [];
    let iA = 0;
    let iB= 0;
    let countA=1;
    let countB=1;

    while(iA < sortedA.length && iB < sortedB.length){
        if(!unionArr.includes(sortedA[iA])){
            unionArr.push(sortedA[iA]);
            iA++
        }else if(!unionArr.includes(sortedA[iA])){
            unionArr.push(sortedB[iB]);
            iB++
        }else{
            while(sortedA[iA]==unionArr[unionArr.length]){
                countA++
                iA++
            }
            while(sortedB[iB]==unionArr[unionArr.length]){
                countB++
                iB++
            }
            if(countA>countB){
                while(countA>0){
                    unionArr.push(sortedA[iA])
                    countA--
                }
            }else if(countB>countA){
                while(countB>0){
                    unionArr.push(sortedB[iB])
                    countB--
                }
            }
            countA=1;
            countB=1;
        }
    }
    return unionArr;
}
console.log(orderedMultiSetUnion(nums1,nums2))



function orderedMultiSetUnionExmpl(sortedA, sortedB){

    const unionArr = [];
    let iA = 0;
    let iB= 0;

    while(iA< sortedA.length){
        while (iB < sortedB.length){
            if(sortedA[i] < sortedB[j]){
                unionArr.push(sortedA[iA])
                iA++;
            }else if (sortedA[iA] )
        }
    }

}