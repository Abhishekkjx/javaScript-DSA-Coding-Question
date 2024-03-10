let arr = [23,45,51,56,78,32,78]
function reverse(arr){
    let i = 0;
    let j = arr.length-1;
    while(i<=j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
let result = reverse(arr);
console.log(result);