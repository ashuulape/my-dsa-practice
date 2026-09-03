let arr=[1,7,3,3,5,6]

// target = 3

let right=0
let left=arr.length-1

let prefixSum=arr[right] //1
let postfixSum=arr[left] //6

while(right<left){

        if(prefixSum<postfixSum){
            right++
            prefixSum+=arr[right]  // 1+7=8
    
        }
        else{
            left--
            postfixSum+=arr[left]
            
        }
  
}
    
console.log(right);
