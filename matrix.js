function spiralTraversal(arr) {
  let result = [];
  let top = 0, bottom = arr.length - 1;
  let left = 0, right = arr[0].length - 1;

  while (top <= bottom && left <= right) {
    // left to right along top row
    for (let i = left; i <= right; i++) {
      result.push(arr[top][i]);
    }
    top++;

    // top to bottom along right column
    for (let i = top; i <= bottom; i++) {
      result.push(arr[i][right]);
    }
    right--;

    // right to left along bottom row (only if top <= bottom still valid)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    }

    // bottom to top along left column (only if left <= right still valid)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++;
    }
  }

  return result;
}

console.log(spiralTraversal([[1,2,3],[4,5,6],[7,8,9]]));
// [1, 2, 3, 6, 9, 8, 7, 4, 5]