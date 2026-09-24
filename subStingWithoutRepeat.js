function norepeat(str){

    let result=''
    for (let i = 0; i < str.length-1; i++) {
        let window=''
        
        for (let j = i; j < str.length; j++) {
            
            if(window.split('').includes(str[i])){
                if(result.length<window.length) result=window 
                break;
            }
            window+=str[i]
            
        }
        
        
    }
    return result
}

console.log(norepeat("abcabcbb"))