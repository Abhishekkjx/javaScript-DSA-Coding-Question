let arr = [-10,-4,-3,-6,7]
function maxNumber(arr){
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}
let result = maxNumber(arr);
console.log(result);

//output 7 max element in the given number