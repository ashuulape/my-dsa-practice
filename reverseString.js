let str=['hello','raju']

const revrerseStr=(str)=>{

    const reverse =str.map((i)=>{
       return i.split('').reverse().join("")
 
    })

    return reverse


}


console.log(revrerseStr(str));