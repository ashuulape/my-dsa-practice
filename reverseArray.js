let arr=[1,2,3,4,6,7,8]

let right=0
let left=arr.length-1

while(right<left){
    [arr[right],arr[left]]=[arr[left],arr[right]]
    right++
    left--
}

console.log(arr);
