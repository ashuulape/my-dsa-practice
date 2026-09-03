// var x=0
// var y='0'

// var z=false


// console.log(x==y);
// console.log(x==z);

// const arr=[100,-200,300,-400,-800]

// const negNum=(arr)=>{
//    return arr.filter((n)=>{
//     return n<0
// })
// // let newArr=[]
// // arr.forEach(arr => {
// //     if(arr<0){
// //         newArr.push(arr)
// //     }
  
// // });
// //   return newArr
// }

// console.log(negNum(arr))


// console.log(a)

// const a=9

//recoursion
// function countdown(n) {
//   if (n === 0) {
//     return 1;
//   }
  
//   return n * countdown(n - 1);
 
 
// }

// console.log(countdown(5));

//count charecter
// const str="deadpool"

// let obj={}

// const count=(str)=>{
    
// for(let char of str){
//     if(obj[char]){
//         obj[char]++
//     }
//     else{
//         obj[char]=1
//     }
  
// }
//   return obj
// }

// console.log(count(str));

// let str=[10,2,30,4,5,1,20]

// let sort=str.sort((a,b)=>a-b)

// let min=0
// let max=str.length-1
// let final=[]

// const minmax=()=>{
// for(let index in sort){
//     if(index % 2 ==0){
//         final[index]=sort[min]
//         min++
//     }
//     else{
//         final[index]=sort[max]
//         max--
//     }
   
// }
//  return final
// }


// console.log(minmax(sort));



//meadan
//  let nums1 = [1]
//  let nums2 =[2]
//  const sortedarr=[...nums1,...nums2].sort((a,b)=>a-b)
//  const len=sortedarr.length
// let mean
//  if(len % 2==0){
//     let first_mean=sortedarr[(len/2)-1]
//     let second_mean=sortedarr[len/2]
//      mean=(first_mean+second_mean)/2

//      console.log(mean)
//  }
 
//  else{
//     mean=sortedarr[Math.floor(len/2)] 
//     console.log(mean)
//  }




// let revStr=''

// let splitedstr=str.split(' ')

// for(let i= splitedstr.length-1; i>=0 ; i--){
//     revStr+=splitedstr[i]+' '
// }

// console.log(revStr);

// let str ="hello my name is ashu"
//       let resultArray = [];              
//       let tempString = ''; 
//       for(var i = 0; i< str.length;i++){ 
//           if(str[i] !== ' '){            
//             tempString += str[i];       
//            } else{                       
//             resultArray.push(tempString);
//             tempString = "";             //7
//           }
       
//       }  
//        if(tempString){
//             resultArray.push(tempString)
//           }

//       console.log(resultArray);


// Input: "ashu is learning javascript"
// Output: 8

// const str="ashu is learning javascript"

// function countVowels(str) {
//     let vowels=0
//  for(let char of str){
//     if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//         vowels+=1
//     }
   
//  } 
//  return vowels
// }

// console.log(countVowels(str));


// let arr=[1, 2, 2, 3, 4, 4, 5]
// // Output: [1, 2, 3, 4, 5]
// function removeDuplicates(arr) { 
//  let unique=[]
//  let dupli=[]
//  for(let char of arr){
//     if(unique.indexOf(char)===-1){
//         unique.push(char)
//     }
//     else{
//         dupli.push(char)
//     }
//  }
//  return {unique, dupli}
// }


// console.log(removeDuplicates(arr));




// let str='swiss'

// function firstUniqChar(str) {
  
//     let unique=[]
//     let dupli=[]
    
//     for(let char of str){
//         if(unique.indexOf(char)==-1){
//             unique.push(char)
//         }
//         else{
            
//            let index = unique.indexOf(char);      // find the position of 'c'
//             if (index !== -1) {
//             unique.splice(index,1);            // remove 1 element at that position
//             }
//         }
//     }
    
//     return unique[0]
// }

// console.log(firstUniqChar(str));



// const obj={
//     a:2,
//     b:5,
//     sum(){
//         return this.a+this.b
//     }
// }
      
// const res=obj.sum.bind(obj)

// console.log(res());


// const a={}
// const b={key:'b'}
// const c={key:'c'}

// a[b]=123
// a[c]=456

// console.log(a[b]);

// let str="my name is ashu ulape"

// let maxlen=0
// let maxword=''


// function maxchar(str){  
//     const words = str.split(' ')

// for(let word of words){
//     if(word.length>maxlen){
//         maxlen=word.length
//         maxword=word
//     }
// }
// return maxword
// }
// console.log(maxchar(str));


// let str="my name is ashu ulape"

// let maxlen=0
// let temp=''
// let maxword=''

// for(let i=0 ;i<str.length;i++){
//     if(str[i]!==' '){
//        temp+=str[i]
//        if(temp.length>maxlen){
//         maxlen=temp.length
//         maxword=temp
//        }
//     }
//     else {
//         temp=''
//     }
   
// }
// console.log(maxword);



function curry(a){

return function(b){
            if(b==undefined){
                return a;
            }
            return curry(a*b)
        }

}




console.log(curry(1)(2)(3)(4)(5)(6)());

   
 

    
 

