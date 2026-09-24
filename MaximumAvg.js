function maxAvg(arr,t){
    let result=[]
    let average=-Infinity
    let sum=0
    let avgarr=[]

    for (let i = 0; i <=arr.length-t; i++) {
        let left=i
        let right=i+t
        
        while(left<right){
            sum+=arr[left]
            avgarr.push(arr[left])
            left++
        }
        const avg=sum/t
if(avg>average){
    average=avg
    result=avgarr
}
        sum=0
        avgarr=[]
    }
    return average
}


console.log(maxAvg([1,12,-5,-6,50,3],4))