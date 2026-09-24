
function posi (arr:number[],t:number):number{


    let min:number=0
    let max:number=arr.length-1;


    while(min<max){
        const mid=Math.floor((min+max)/2)

        if(arr[mid]<t){
            min = mid+1

        }
        if(arr[mid]>t){
            max=mid;

        }


    }

    return min
}


console.log(posi([1,3,5,6],5))