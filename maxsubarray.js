let arr = [20,40,45,23,13,78,96]

function maxsubarray(arr){
    let sum = 0;//20 
    let max = 0;//20 60 105
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i]; // 0+20  20+40=60 60+45=105
        if(sum>max){// true true true
            max = sum; // max = 20 max = 60 max = 105
        }
    }
    return max;
}

let result = maxsubarray(arr)
console.log(result);