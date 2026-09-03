let s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
let left = 0;
    let maxLen = 0;
    const seen = new Map(); // char -> its last seen index

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // if char was seen and is inside current window, shrink from left
        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }

        seen.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;

}


console.log(lengthOfLongestSubstring(s));



