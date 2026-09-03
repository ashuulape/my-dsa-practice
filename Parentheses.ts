function isValid(s: string): boolean {

    const stack: string[] = [];
    const pairs: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            // ch is a closing bracket
            const last = stack.pop();
            if (last !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


console.log(isValid("()[]{}"))