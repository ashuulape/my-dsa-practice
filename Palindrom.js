
const arr=['ashu','madam','dead','poop']


const checkPalindrom=(arr)=>{

arr.map((elem,idx)=>{
    const reverse=elem.split('').reverse().join('')
     elem===reverse?console.log(elem,'this is palindrom'):console.log(elem,'this is not a palindrome');
})
    
     
     
}

checkPalindrom(arr)

