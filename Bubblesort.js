
function bubbleSort(arr) {
   
   for (let index = 0; index < arr.length; index++) {
   
    
       
        for (let index = 1; index < arr.length; index++) {
           let lo=index-1
           let hi=index
    
           if(arr[lo]>arr[hi]){
            [arr[lo],arr[hi]]=[arr[hi],arr[lo]]
           }
    
           
            
        }
   }
    
    
    return arr
}



console.log(bubbleSort([9, 3, 6, 2, 1, 11]))