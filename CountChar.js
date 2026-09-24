let str='hello'

let result={}


for(let char of str){


 if(!result[char]){
    result[char]=1
 }else{
    result[char]++
 }
    
}

console.log(result);
