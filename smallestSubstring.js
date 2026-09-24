// function smallest(str,t){
//     const target=t.split('')
//     let result='';
//     for (let i = 0; i < str.length-1; i++) {
//         if(target.includes(str[i])){
//             let window=''
//             for (let j = i; j < str.length-1; j++) {
//                 if(target.every(t=>window.includes(t))){
//                    window.length<result.length || result.length ==0 ?result=window:result=result ;
//                     break
//                 }
//                 window+=str[j] 
            
            
//             }
//         }
        
//     }
//     return result
// }

// console.log(smallest("ADOBECODEBANC","ABC"))


function smallest(str, t) {
    const target = t.split('');
    let result = '';

    for (let i = 0; i < str.length; i++) {          // Bug 3: loop to str.length, not length-1
        if (target.includes(str[i])) {
            let window = '';                         // Bug 1: reset window for EACH new start i
            for (let j = i; j < str.length; j++) {   // Bug 3: same fix here
                window += str[j];                     // Bug 2: add char FIRST, then check

                if (isValid(window, target)) {        // Bug 4: use count-based check, not .every+.includes
                    if (result.length === 0 || window.length < result.length) {
                        result = window;
                    }
                    break;
                }
            }
        }
    }
    return result;
}

// Bug 4 fix: count-based validity check instead of target.every(t => window.includes(t))
function isValid(window, target) {
    const need = {};
    for (const ch of target) need[ch] = (need[ch] || 0) + 1;

    const have = {};
    for (const ch of window) have[ch] = (have[ch] || 0) + 1;

    for (const ch in need) {
        if (!have[ch] || have[ch] < need[ch]) return false;
    }
    return true;
}

console.log(smallest("ADOBECODEBANC", "ABC")); // "BANC"
