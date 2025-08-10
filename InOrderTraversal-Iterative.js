/* Approach
-. Create a stack and ans array, curr = root.
-. Traverse Left - keep pushing nodes to stack while moving left side.
-. Visit Node - When no more left nodes , pop from the stack. Add the node's value to the array ans.
-. Traverse Right - move curr to the right child and repeat.

*/
var inorderTraversal = function (root) {
    
    let curr = root;
    let stack = [];
    let ans = [];

    while (curr || stack.length ) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};
