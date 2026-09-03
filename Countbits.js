let num=9
let binary=num.toString(2)

let arr=binary.split('')
count=0
for(num of arr){
    if(num==1){
        count++
    }
}

console.log(count)