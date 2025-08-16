var maxDepth = function (root) {
    if(!root) return 0;

    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);

    return 1 + Math.max(leftMax, rightMax);
};
