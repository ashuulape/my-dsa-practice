
var deleteDuplicates = function(head) {
    let stack = []
    for(let i = 0; i < head.length; i++) {
        if(head[i]!==stack[stack.length-1]){
            stack.push(head[i]);
        }

    }
return stack;
};

console.log(deleteDuplicates([1,2,2,3,4,5,5,6]))