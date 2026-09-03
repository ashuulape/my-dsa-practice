// let str='3[a]2[bc]'
// // o/p=aaabcbc
// let stack=[]
// let numstack=[]
// let sb=''
// let num=0

// for(let char of str){
//     if(char >= '0' && char <= '9' ){
//         num=Number(char)
        
        
//     }
//     else if(char=='['){
//        numstack.push(num)
//        stack.push(sb)
//        num=0
//        sb=''
//     }
//     else if(char=="]"){
//         let repeat=numstack.pop()
//         let prevstr=stack.pop()
//         sb=prevstr+sb.repeat(repeat)
//     }
//     else{
//         sb+=char
//     }
//     console.log(stack,numstack,sb);
    
   
    
    
// }
// console.log(sb);

// let arr=[100,50,46,30,50,70,100,10]

// // let map= new Map


// // for(num of arr){

// //     map.set(num,((map.get(num)||0)+1))
   
// // }

// // let result=arr.filter(num=>map.get(num)==1)

// // console.log(result);

// arr.map((e,idx)=>{
// e=arr[idx]>600
// console.log(e);
 

// // })


// console.log(x);

// var x=10


// console.log(0.1 + 0.2);

// let obj ={
//     a:1,
//     b:2
// }

// console.log(obj.toString());

// let a={a:2,b:3}

// let b={...a}
// b.a=3
// console.log(a,b);

// let a=[1,2,3,4,5]

// const num=a.filter((e)=>e>2)

// console.log(num);

// let a='ashu'
// a 2='r'
// console.log(a);

// let a=100
// let z=a++

// console.log(a+z);

// let str="my name i ashu"

// let revstr=''

// let temp=''
// for(char of str){

//     if(char!==' '){
//         temp =  char+ temp
//     }

//     else{
        
//         revstr=revstr +' ' + temp
//         temp=' '
//     }
// }

// revstr=revstr + ' ' + temp

// console.log(revstr);


// let name='ashu ulape'

// let result={}

// for(char of name){

//     if(!result[char]){
//         result[char]=1
//     }
//     else{
//         result[char]++
//     }
// }

// console.log(result);


// let arr=[1,10,18,14,6]

// function abc(b,...a){
//     console.log(a)
// }

// abc(8,9,10,11,12)//[9,10,11,12]

// const arr=['a',1,'b',2,'c',3]

// let char=[]
// let num=[]

// arr.map((e)=>{
//     if(e/e!==1){
//         num.push(e)
//     }
//     else{
//         char.push(e)
//     }
    
// })


// console.log(char,num);

// let arr1 =[1,2,3,4,5]
// let arr2 =[3,4,5,6,7]



// let result=[]
// for(num of arr1){
//     if(arr2.indexOf(num)!==-1){
//         result.push(num)
//     }
// }

// console.log(result);

// let arr=[1,2,3,4,5]

// console.log(arr.reduce((a,b)=>a*b));


// let str=[123]
// console.log(JSON.parse(str));

// console.log([]==[]);
// console.log([]===[]);

// let arr=[10,20,30,40,50,60,70]
// const target=50


// function binary(arr,target){

//     let lo=0
//     let hi=arr.length-1
//     let result
//     while(lo<hi){
//         const mid=Math.floor((lo+hi)/2)
//         if(arr[mid]<target){
//             lo++
//         }
//         else if(arr[mid]>target){
//             hi++
//         }else if(arr[mid]==target){
     
//             return mid
     
//         }
//     }

// }

// console.log(binary(arr,target));

// let x=[1,2,3,4]
// let [a,...b]=x.reverse()

// console.log(b);

// let arr =[1,2,3,4,2,5,6,7,5]
// let map =new Map

// for(num of arr){
   
//     map.set(num,(map.get(num)||0)+1)
// }
// let result =[]

// for(const [Key,values] of map){
//     if(values>1){
//         result.push(Key)
        
//     }
// }

// console.log(result)


// let str='my name is ashu sh '

// let target='name'


// let lo=0
// let hi=target.length
// let result=false
// let count =0
// let window=''
// let temp=''
// while(hi<str.length){

// let window = ''

//     for (let i = lo; i < hi; i++) {
//         window = window + str[i]
//     }
    
//     if(window === target){
//        result=true
//        count=count+1
        
//     }
//     lo++
//     hi++
    
// }
// console.log(count);

// let str1='ashu'
// let str2='ulapeeeeee'


// function mergestr(str1,str2){

//     let maxlen=Math.max(str1.length,str2.length)
//     let ans=''
//     for(let i=0;i<maxlen;i++){
//         ans+=(str1[i]||'')+(str2[i]||'')
        
//     }
//     return ans

// }

// console.log(mergestr(str1,str2));

// let str='my name is ashutosh'

// let result=''
// maxlen=0
// let temp=''

// for(char of str){

//     if(char!==" "){
//         temp+=char
//     }else{
//         temp=''
//     }

//     if(temp.length>maxlen){
//         maxlen=temp.length
//         result=temp
//     }

// }

// console.log(result);


// let arr=[[1,2],[3,4],[5,6],[7,8]]

// let result=[]

// for(let i=0;i<arr.length;i++){

//     for(num of arr[i]){
//         result.push(num)
//     }
// }

// console.log(result);


// function curry(a){
//     return function(b){
//         if(b===undefined){
//             return a
//         }
//         return curry(a*b)
//     }
// }


// console.log(curry(1)(2)(3)(4)(5)())

// let arr=[1,2,3,4,5,6,1,2]
// let map=new Map
// let result=[]
// for(char of arr){
//     map.set(char,(map.has(char)||0)+1)
// }

// for([idx,num] of map){
//     if(num>1){
//         result.push(idx)
//     }
// }


// console.log(result);

// let obj={
//     name:'ashu',
//     age:22
// }


// const {name ,age}=obj

// console.log(name);

// const nums=[1,2,3]
// // console.log(nums.forEach((x)=>{return x*2}));

// const re=nums.map((x)=>{
//     return (x%2===0);
    
// })

// console.log(re);


// let obj={
//     name:'ashu',
//     hobby:{
//         fisrt:'games',
//         sec:"code"
//     }
// }


// const {name, hobby: {fisrt,sec}  } =obj
// console.log(fisrt,sec);


// const abc={
//     name:'ashu',
//     age:22,
//     addres:"borgaon"

// }

// let xyz={
//     ...abc,
//     name:"dead"
// }


// const {name , ...pqr} =abc

// console.log(pqr);

// function curry(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

// console.log(curry(1)(2)(3));

// let arr=[1,2,3,4,5]

// let total=0
// arr.forEach((a)=>total+=a)
// console.log(total);

// let arr=['ashu','as',]

// result =arr[0].includes(arr[1])
// console.log(result);

// let arr=[0,1]
// function fubo (num){
//     for(i=1;i<num;i++){
//         last=arr.length-1
         
//       let  nextele=arr[last]+arr[last-1]
//         arr.push(nextele)
        
        
//     }
//     return arr
// }

// console.log(fubo(8));

// let arr=[{
//     name:'ashu',
//     age:22
// },
// {
//     name:'dead',
//     age:21
// },
// {
//     name:"madara",
//     age:23
// }]

// let result=arr.filter((e)=>{
//     return e.age>=22
// })

// function ageless(){
//     for(obj of arr ){
//         if(obj?.age>=22){
//             result.push(obj)
//         }
//     }
//     return result
// }

// console.log(result);

// function abc(a,...b){
//     console.log(b,typeof(b));
// }

// abc(10,8,7)

// let arr=[1,2,3,4,5]

// const[a,b,c]=arr

// console.log(c);

// function sum(a, ..b){
//     return a+b
// }

// console.log(sum(1+2));

// let arr=[100,50,10,30,7]

// console.log(arr.reduce((a,b)=>a+b ,0));


// function curry(a){
//     return function(b){
//         if(b===undefined){
//             return a
//         }
//         return curry(a+b)
//     }
// }

// console.log(curry(1)(2)(3)(4)(5)());

// let arr=[10,'a','c',11,5]

// let num=[]
// let charecter=[]

// function split(arr){


//     for(char of arr){
//         if(char/char===1){
//             num.push(char)
//         }else{
//             charecter.push(char)
//         }
//     }

//     return {num ,charecter}

// }
// split(arr)
// console.log(num,charecter);

// console.log(3+true);

// let nums=[1,1,1,2,2,3]
// let k=2

// let map=new Map

// for(num of nums){
//     map.set(num,(map.get(num)||0)+1)
// }

// let result=[...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(entry=>entry[0])


// console.log( result);


// let x=12231
// x===Number(x.toString().split('').reverse().join(''))?console.log('this is palindrom'):console.log('this is not palindrom');

// let num=1

// num===1? console.log('true') :console.log('fales');



// console.log('A'-1)
// console.log("ashu"+'100');

// console.log('2'+2+'2');
// console.log('2'+2-'2');

// let a={}
// let b={name:'ashu'}
// let c={name:'dead'}
// let d={name:"eyyfvbytty"}

// a[b]={name:'ankit'}//[object object]
// a[c]={name:'madara'}
// a[d]={name:'ashutosh'}
// console.log(a[b]);

// let y=0
// let z=false

// console.log(y==z);
// console.log(y===z);

// console.log('a'/'a')
// console.log(NaN==NaN);
// console.log(NaN===NaN);

// let a=[100,50,200,150]
// // console.log(a.map((e)=>e>2));

// a.unshift(10)

// console.log(a);


// function curry(a){
//     return function(b){
//         if(b==undefined){
//             return a
//         }
//         return curry(a+b)
//     }
// }

// console.log(curry(1)(2)(3)(4)(5)())


// let arr=[1,2,3,4]

// const [a,b]=arr
// console.log(b);

// console.log(a);


// const ab=()=>{
    
    
//     let a=10
//     console.log(a);
    
// }

// ab()


// function a(){
//     return 2
// }
// function b() {
//     return 4
// }

// let result=(2,3,2)

// console.log(result)

// let arr=['one','two','three']

// const str='ashu'

// const result=arr.includes('one')

// const res=arr.includes('onetwo')
// const newres=str.includes('sh')

// console.log(result,res,newres);


// console.log(true=='');
// console.log('1'==1)
// let a=10
// let b=new Number(10)
// let c=10

// console.log(b)

// let a={name:'ashu'}
// let z=structuredClone(a)
// z.name='dead'
// console.log(z)

// onsole.log(bye)

// var bye =() =>{
//     console.log('bye');
    
// }c

// let str1='ashu'
// let str2='ulape'

// let maxlen=Math.max(str1.length,str2.length)
// let result=''
// for(i=0;i<maxlen;i++){
//     result+=(str1[i]||'')+(str2[i]||'')
// }

// console.log(result);
 
// let arr1=[2,4,3]
// let arr2=[5,6,4]
// let num1=0
// let num2=0
// let op=[]
// for(i=arr1.length-1;i>-1;i--){
//     num1=(num1*10)+arr1[i]
//     num2=(num2*10)+arr2[i]
    
// }
// let result=num1+num2

// while(true){
// if(result<=0){
// break
// }
// op.push(result%10)
// result=Math.floor(result/10)
// }

// console.log(op);

// let numbers = [10,7,0,0,9]
//   let map = new Map();
//   let output = false;
//   for (let num of numbers) {
//     if (map.get(num)!==undefined) {
//       output = true;
//     }
 
//     map.set(num, num);
//   }

// console.log(output)


// let arr=[1, [2, [3, [4, [5]]]]];
// let flatarr=[]
// function flat(arr){
     
//     for(num of arr){
//         if(Array.isArray(num)){
//             flat(num)
//         }
//         else{
//             flatarr.push(num)
//         }
//     }
    
//     return flatarr

// }
// console.log(flat(arr))


 let numbers = [10,7,0,0,9]


numbers=numbers.filter((a,i)=>i!==1)
console.log(numbers)
 