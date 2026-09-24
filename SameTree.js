var isSameTree = function(p, q) {
   if (p === null && q === null) {
        return true;
    }
    
    // one is null, other isn't → mismatch
    if (p === null || q === null) {
        return false;
    }
    
    // values differ → mismatch
    if (p.val !== q.val) {
        return false;
    }
    
    // recurse into both subtrees — both must match
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree([1,2],[1,null,2]))

console.log([null].length)