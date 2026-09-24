function secondLarge(arr){

   
    let stack=[0]
  
    for(num of arr){
        
        if(num>=stack[stack.length-1]){
            stack.push(num)
        }
         if(num>=stack[stack.length-2] && num<stack[stack.length-1]){
            stack[stack.length-2]=num
        }
    }
    
    return stack[stack.length-2]
   
}

console.log(secondLarge([12,35,1,10,34,2]))