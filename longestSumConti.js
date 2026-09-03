function maxSubArray(arr) {
    let maxSum = arr[0], curSum = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (curSum < 0) {
            curSum = arr[i];
            tempStart = i;
        } else {
            curSum += arr[i];
        }

        if (curSum > maxSum) {
            maxSum = curSum;
            start = tempStart;
            end = i;
        }
    }

    return arr.slice(start, end + 1);
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); 