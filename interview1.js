// const para=(...para)=>{

//     return typeof(para)
// }

// console.log(para('a','b','x'))

// console.log('5'+8)
// console.log('5'-3)
// console.log(NaN===NaN)


// const curry=(a)=>{
//    return  (b)=>{
//             if( b === undefined ){ return a; }
//             return curry(a+b);
//                 }

// }

// console.log(curry(1)(2)());

const person = {
  name: "John",
  address: {
    city: "Delhi"
  }
};


const copy=structuredClone(person)

copy.name="ashu"
copy.address.city="kolhapur"


console.log(person);
console.log(copy);