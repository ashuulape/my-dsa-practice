// let arr=[1,2,2,2,3,4]
// let target=2

// let left=0
// let right=arr.length-1
// let fisrtocc 
// let lastocc

// while(left<=right){
//     if(arr[left]!==target){
//         left++
//     }
//     else if(arr[right]!==target){
//         right--
//     }
//     else{
//         fisrtocc=left
//         lastocc=right
//       break
//     }
      
// }

// console.log([fisrtocc,lastocc]);

let arr=[1,2,2,2,3,4]
let target=2 

function findFirst(arr, target) {
  let lo = 0, hi = arr.length - 1, result = -1;
  while (lo <= hi){
     
    const mid = Math.floor((lo + hi) / 2);//2

    if (arr[mid] === target) {
      result = mid;//2
      hi = mid - 1; // keep searching left half for an earlier occurrence
    }
     else if (arr[mid] < target) {
      lo = mid + 1;
    }
     else {
      hi = mid - 1;
    }
  }
  return result;
}

function findLast(arr, target) {
  let lo = 0, hi = arr.length - 1, result = -1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) {
      result = mid;
      lo = mid + 1; // keep searching right half for a later occurrence
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}

console.log([findFirst(arr, target), findLast(arr, target)]); // [1, 4]






