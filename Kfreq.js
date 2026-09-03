
let nums=[1,1,1,2,2,3]
let k=1

let map=new Map

for(let i of nums){
      map.set(i,(map.get(i)||0)+1)
}

let result=[]

for(let count=0;count<k;count++){

let maxkey
let maxval=0

  for(let [key,value] of map){
  if(value>maxval&&!result.includes(key)){
    maxval=value
    maxkey=key
  }
  
  }

  result.push(maxkey)

}

console.log(result);
