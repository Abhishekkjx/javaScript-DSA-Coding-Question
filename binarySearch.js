let arr = [21, 40, 56, 65, 83, 79, 98];
function binarySearch(arr, target) {
    let si = 0;
    let ei = arr.length - 1;
    while (si<=ei) {
        let mid = Math.floor((si + ei) / 2);
        if (arr[mid]>target){
            ei = mid - 1
        }else if(arr[mid]===target){
            return `${arr[mid]} is ${mid} index`
        }else if(arr[mid]<target){
            si - mid + 1
        }
    }
    return 'not found'
}
let result = binarySearch(arr,79)
console.log(result);