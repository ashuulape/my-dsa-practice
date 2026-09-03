let arr=[1,3,4,5,6,7,9,11,13,15,18,19,21,23,26,29]
target=23

let lo=0,hi=arr.length,mid=0

while(lo<hi){
    mid=Math.floor((lo+hi)/2)
    console.log(mid);

    if(arr[mid]<target){
        lo=mid+1
        
    }
    else if(arr[mid]>target){
        hi=mid-1
    }
    else {
        break
    }
}

console.log(mid);


