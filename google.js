function maxSquareArea(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // dp[i][j] = side length of the largest square
    // whose bottom-right corner is at (i, j)
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    let maxSide = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                    console.log(dp)// first row/col: square can only be size 1
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j],     // above
                        dp[i][j - 1],     // left
                        dp[i - 1][j - 1]  // diagonal
                    ) + 1;
                }
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    return maxSide * maxSide;
}

const farm = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];

console.log(maxSquareArea(farm)); // 9

