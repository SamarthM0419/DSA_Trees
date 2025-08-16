var hasPathSum = function (root, targetSum) {
    if(!root) return false;

    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    let isLeftTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
    let isRightTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

    return isLeftTreeHasPathSum || isRightTreeHasPathSum;
};
