

var levelOrder = function(root) {
    if(!root) return [];
    let ans = [];
    let traversal = (curr, level) => {
        if(!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }
    traversal(root, 0);
    return ans;
};
