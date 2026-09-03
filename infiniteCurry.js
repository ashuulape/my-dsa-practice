function curry(a){
   return function(b){
    if(b===undefined){
        return a
    }
    return curry(a+b)
   }




}

console.log(curry(1)(2)(3)(4)(5)(6)(7)(8)(9)());