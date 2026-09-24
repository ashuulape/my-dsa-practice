var plusOne = function(digits) {
    let carry=1
    let res=[]
    for (let i =digits.length-1; i>=0; i--) {
        if(carry >=1){
            const num=digits[i]+1
           if(num===10){
res.unshift(0)}
           else {
               res.unshift(num)
               carry--;
           }
        }else {
        res.unshift(digits[i])}
    }
    carry===1&&(res.unshift(1))
    return res
};

console.log(plusOne( [9]))