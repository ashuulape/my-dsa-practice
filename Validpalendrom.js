function valid(str){
let finalstr=''
for(ch of str){
    const isLetter = (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") ||(ch >= "0" && ch <= "9")
    if (isLetter) finalstr += ch.toLowerCase()
}


left=0
right=finalstr.length-1

while(left<right){
    if(finalstr[left]!==finalstr[right]) return false
    left++
    right--
}
return true


}

// console.log(valid("A man, a plan, a canal: Panama"))
console.log('a'<'b')