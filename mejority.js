let arr=[2,2,1,3,2,1,3,1,1]

let mejority=arr[0]
let votes=0

for (num of arr){
    if(mejority==num){
        votes++
    }
    else{
        votes--
    }

    if(votes==0){
        mejority=num
        votes=1  
    }
   
    
}

console.log(mejority);

