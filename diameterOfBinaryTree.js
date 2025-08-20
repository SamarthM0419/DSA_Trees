var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;

    let findDepth = (curr) => {
        if(!curr) return 0;
        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);
        let currDiameter  = leftDepth + rightDepth

       maxDiameter = Math.max(maxDiameter , currDiameter);

        return 1 + Math.max(leftDepth , rightDepth);
    }
    findDepth(root);

    return maxDiameter;
};
