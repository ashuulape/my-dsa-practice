// let arr=[2,1,5,1,3,6]

// // window of 3
// let k=3
// let max=0
// let window=[]

// for(let num=0;num<=arr.length-3;num++){
   
    
//     let sum=arr[num]+arr[num+1]+arr[num+2]
//     if(sum>max){
//         max=sum
//         window=arr.slice(num,num+k)
//     }

    

// }

// console.log(window);


let arr = [2,1,5,1,3,2];
let k = 3;

let sum = 0

for(i=0;i<k;i++){
    sum+=arr[i]
}


let max = sum;
let start = 0;

for (let i = k; i < arr.length; i++) {
    
   sum=sum-arr[i-k]+arr[i]

   if(sum>max){
    max=sum
    start=i-k+1
   }
}

console.log(arr.slice(start, start + k)); // [1,3,6]
console.log(max); // 10
