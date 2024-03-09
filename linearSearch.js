let arr = [12,56,78,65,34,23,12]
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return `${arr[i]} is ${i} index`
        }
    }
    return 'not Found';
}
let result = linearSearch(arr,2)
console.log(result);